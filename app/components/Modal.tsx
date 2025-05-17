import { useRouter } from "next/navigation";
import { Dialog, DialogPortal, DialogOverlay, DialogTitle, DialogContent } from "@/components/ui/dialog";


interface Props {
  children: React.ReactNode;
}

const Modal = ({children}:Props) => {
    const router = useRouter();

    const handleOpenChange = ()=> {
        router.back();
    }

    return (
        <Dialog open={true} onOpenChange={handleOpenChange}>
            <DialogPortal> {/*stops modal bg from jumping to top page*/}
            <DialogOverlay />
            <DialogContent className="fixed flex items-center justify-center overflow-y-hidden">
                <DialogTitle></DialogTitle>
                {children}
            </DialogContent>
            </DialogPortal>
        </Dialog>
    );
}

export default Modal;