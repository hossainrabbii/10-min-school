import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

interface Item {
  title: ReactNode;
  subtitle: ReactNode;
  class: string;
  isOpen: any;
  setIsOpen: any;
  i: number;
}
const AccordionBox = (item: Item) => {
  const expanded = item.i === item.isOpen;
  return (
    <div className={`border-b ${item.class}`}>
      <motion.header
        className="flex items-center cursor-pointer justify-between py-4"
        initial={false}
        onClick={() => item.setIsOpen(expanded ? false : item.i)}
      >
        <div className="flex items-center space-x-4 space-x-reverse">
          <span>{item.title}</span>
        </div>
        <motion.div className="flex" animate={{ rotate: expanded ? 180 : 0 }}>
          <IoIosArrowDown
            className={`w-6 ${
              expanded ? "text-black" : "text-gray-600 hover:text-black "
            } `}
          />
        </motion.div>
      </motion.header>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapse"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.06, 0.23, 0.98] }}
          >
            <div className="py-2">
              <div>{item.subtitle}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionBox;
