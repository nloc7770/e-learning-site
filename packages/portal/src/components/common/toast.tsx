import { variantsToast } from '@/helper/config';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo } from 'react';

const Toast = ({ toast, onClose }: any) => {
    const { message, status, show, time } = toast;
    const images = [{
        key: "warning", value: '/images/toast/warning-toast.png',
    }, {
        key: "fail", value: '/images/toast/error-toast.png',
    }, {
        key: "success", value: '/images/toast/success-toast.png'
    }]
    const image = useMemo(() => {
        return images.find((image) => image.key === status)
    }, [status])
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
                                <img width="28px" src={image?.value} />
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
