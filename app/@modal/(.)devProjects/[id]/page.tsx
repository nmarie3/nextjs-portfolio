'use client'
import DevProjectDetails from "@/app/components/DevModal/DevProjectDetails";
import { getOneDev } from "@/app/db/DevProjectsData";
import Modal from "@/app/components/Modal";
import { use } from 'react';


interface Props {
  params: Promise<{ id: string }>;
  };


const DevModal = ({ params }: Props) => {
    const { id } = use(params);

  const devProject = getOneDev(id);

      //without this there will be an error of "devProject may be undefined"
    if (!devProject) {
        return <div>Project not found.</div>;
    }

    return (
        <Modal>
            <DevProjectDetails devProject={devProject} />
        </Modal>
    );
};

export default DevModal;


// interface Props {
//   params: Promise<{
//     id: string;
//   }>;
// }


// const DevModal = (props: Props) => {
//     const {id} = use(props.params);

//     const devProject = getOneDev(id);