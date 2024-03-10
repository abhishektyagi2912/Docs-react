import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, refrence }) {
  return (
    <motion.div
      drag dragConstraints={refrence} dragElastic={0.1} whileDrag={{ scale: 1.1}} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className=" relative w-60 h-72 rounded-[45px] bg-zinc-700 text-white py-8 px-5 overflow-hidden flex-shrink-0"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold font-sans">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex item-centre justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          {data.close ? <IoMdClose /> : <MdDownload />}
        </div>
        {data.tag.isOpened ? (
          <div
            className={`tag w-full py-4 bg-${data.tag.color}-600 flex justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.text}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
