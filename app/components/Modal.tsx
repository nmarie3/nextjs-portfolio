'use client'
import { useRouter } from "next/navigation";
import { Dialog, DialogPortal, DialogOverlay, DialogTitle, DialogContent } from "@/components/ui/dialog";
import { useEffect, useRef } from "react";


interface Props {
  children: React.ReactNode;
}

const Modal = ({children}:Props) => {
    const router = useRouter();
    const scrollYRef = useRef(0);

    useEffect(() => {
        scrollYRef.current = window.scrollY;
    }, []);

    const handleOpenChange = () => {
        router.back();

        
        requestAnimationFrame(() => {
            window.scrollTo(0, scrollYRef.current);
        });
    };

    return (
        <Dialog open={true} onOpenChange={handleOpenChange}>
            <DialogPortal> {/*stops modal bg from jumping to top page*/}
            <DialogOverlay />
            <DialogContent className="fixed flex items-center justify-center">
                <DialogTitle className="pt-3">
                {children}
                </DialogTitle>
            </DialogContent>
            </DialogPortal>
        </Dialog>
    );
}

export default Modal;