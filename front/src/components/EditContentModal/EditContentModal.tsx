"use client";
import React, { useState, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { IEditContentModalProps } from "@/interfaces";
import { Button } from "flowbite-react";
import Swal from "sweetalert2";

const GET_CONTENT = gql`
 query ContentOne($contentOneId: String!) {
  contentOne(id: $contentOneId) {
    id
    title
    description
    image
    duration
    category
    contentUrl
  }
}
`;

const UPDATE_CONTENT = gql`
  mutation UpdateContent($updateContentInput: UpdateContentInput!) {
    updateContent(updateContentInput: $updateContentInput) {
      title
      image
      contentUrl
    }
  }
`;

const EditContentModal: React.FC<IEditContentModalProps> = ({
  contentId,
  onClose,
}) => {
  const { data } = useQuery(GET_CONTENT, {
    variables: { contentOneId: contentId },
  });
  const [updateContent] = useMutation(UPDATE_CONTENT);

  // Estado inicial del formulario
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    duration: "",
    category: "",
    contentUrl: "",
  });

  // Actualizar el estado del formulario con los datos del contenido
  useEffect(() => {
    if (data) {
      setFormData({
        title: data.contentOne.title || "",
        description: data.contentOne.description || "",
        image: data.contentOne.image || "",
        duration: data.contentOne.duration || "",
        category: data.contentOne.category || "",
        contentUrl: data.contentOne.contentUrl || "",
      });
    }
  }, [data]);

  // Manejo de envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Crear un objeto con solo los campos modificados
    const updatedData = Object.keys(formData).reduce((acc, key) => {
      if (formData[key as keyof typeof formData] !== data.contentOne[key as keyof typeof data.contentOne]) {
        acc[key as keyof typeof formData] = formData[key as keyof typeof formData];
      }
      return acc;
    }, {} as Partial<typeof formData>);

    // Verificar si hay cambios
    if (Object.keys(updatedData).length === 0) {
      Swal.fire("No Changes", "No changes were made.", "info");
      return;
    }

    try {
      // Ejecutar la mutación para actualizar el contenido
      const { data: mutationData } = await updateContent({
        variables: { updateContentInput: { ...updatedData, id: contentId } },
      });

      if (mutationData) {
        Swal.fire("Success", "Content updated successfully", "success");
        onClose();
      }
    } catch (error) {
      console.error("Error updating content:", error);
      Swal.fire("Error", "Failed to update content", "error");
    }
  };


  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-[#0e0e11] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 font-bold text-[#efefef]">Edit Content</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mb-2 w-full p-2 bg-[#1a1a1d] text-[#efefef] rounded-lg border border-gray-500"
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="mb-2 w-full p-2 bg-[#1a1a1d] text-[#efefef] rounded-lg border border-gray-500"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="mb-2 w-full p-2 bg-[#1a1a1d] text-[#efefef] rounded-lg border border-gray-500"
          />
          <input
            type="text"
            placeholder="Duration"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            className="mb-2 w-full p-2 bg-[#1a1a1d] text-[#efefef] rounded-lg border border-gray-500"
          />
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="mb-2 w-full p-2 bg-[#1a1a1d] text-[#efefef] rounded-lg border border-gray-500"
          />
          <input
            type="text"
            placeholder="Content URL"
            value={formData.contentUrl}
            onChange={(e) => setFormData({ ...formData, contentUrl: e.target.value })}
            className="mb-2 w-full p-2 bg-[#1a1a1d] text-[#efefef] rounded-lg border border-gray-500"
          />
          <div className="flex justify-between pt-2">
            <button
           
              type="submit"
              className="px-6 py-4  bg-green-600 hover:bg-green-900 rounded-full font-bold text-[#efefef]"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-4  bg-red-600 hover:bg-red-900 rounded-full font-bold text-[#efefef]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContentModal;
