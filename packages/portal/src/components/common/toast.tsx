import React, { Component, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { variantsToast } from '@/helper/config';

const Toast = ({ toast, onClose }: any) => {
    const { message, status, show, time } = toast;
    const getImage: { [key: string]: any } = {
        warning: '/images/toast/warning-toast.png',
        fail: '/images/toast/error-toast.png',
        success: '/images/toast/success-toast.png'
    };
    return (
        <div className="fixed md:bottom-[0] bottom-[-70px] md:right-[52px] right-0 p-[20px]">
            <AnimatePresence>
                {show && (
                    <motion.div
                        variants={variantsToast}
                        initial="hidden"
                        animate="visible"
                        exit={'exit'}
                        transition={{ duration: 0.3, type: 'spring', stiffness: 100 }}
                    >
                        <div className={`message bg-white flex items-center justify-between shadow-box p-4 rounded toast-${status}`}>
                            <div className="flex items-center">
                                <img width="28px" src={getImage[status]} />
                                <span className="ml-[12px] text-[14px] text-black">{message}</span>
                            </div>
                            <img src="/images/toast/x.png" className="cursor-pointer ml-2" onClick={onClose} width="20px" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Toast;
