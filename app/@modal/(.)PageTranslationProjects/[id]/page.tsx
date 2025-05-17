'use client'
import TranslationProjectDetails from "@/app/components/TranslationModal/TranslationProjectDetails";
import { getOneTranslation } from "@/app/db/TranslationProjectsData";
import Modal from "@/app/components/Modal";
import { use } from 'react';


interface Props {
  params: Promise<{ id: string }>;
  };


const TranslationModal = ({ params }: Props) => {
    const { id } = use(params);

  const translationProject = getOneTranslation(id);

      //without this there will be an error of "translationProject may be undefined"
    if (!translationProject) {
        return <div>Project not found.</div>;
    }

    return (
        <Modal>
            <TranslationProjectDetails translationProject={translationProject} />
        </Modal>
    );
};

export default TranslationModal;