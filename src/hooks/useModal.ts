'use client';
import {useState} from "react";

export function useModal(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal(){
        setIsModalOpen(true);
    }

    function closeModal(){
        setIsModalOpen(false);
    }

    return {isModalOpen, openModal, closeModal};
}