'use client'
import CreativeProjectDetails from "@/app/components/CreativeModal/CreativeProjectDetails";
import { getOneCreative } from "@/app/db/CreativeProjectsData";
import { use } from "react";
import Modal from "@/app/components/Modal";


interface Props {
  params: Promise<{ id: string }>;
  };


const CreativePage = ({ params }: Props) => {
    const { id } = use(params);

  const creativeProject = getOneCreative(id);

  //without this there will be an error of "creativeProject may be undefined"
  if (!creativeProject) {
    return <div>Project not found.</div>;
  }

  return (
    <Modal>
      <CreativeProjectDetails creativeProject={creativeProject} />
    </Modal>
  );
};

export default CreativePage;