"use client";
import React, { useState, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { IEditContentModalProps } from "@/interfaces";
import Swal from "sweetalert2";

// Definición del enum Status
enum Status {
  active = "active",
  inactive = "inactive",
}

// Definir el tipo explícito para los datos del formulario
interface FormData {
  title: string;
  description: string;
  image: string;
  duration: string;
  category: string;
  contentUrl: string;
  status: Status; 
}

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
      status
    }
  }
`;

const UPDATE_CONTENT = gql`
  mutation UpdateContent($updateContentInput: UpdateContentInput!) {
    updateContent(updateContentInput: $updateContentInput) {
      id
      title
      image
      contentUrl
      status
    }
  }
`;

const EditContentModal: React.FC<IEditContentModalProps> = ({ contentId, onClose }) => {
  const { data } = useQuery(GET_CONTENT, {
    variables: { contentOneId: contentId },
  });
  const [updateContent] = useMutation(UPDATE_CONTENT);

  console.log(data)
  console.log(contentId)


  // Estado inicial del formulario con tipo explícito
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    image: "",
    duration: "",
    category: "",
    contentUrl: "",
    status: Status.active, 
  });

  
  useEffect(() => {
    if (data) {
      setFormData({
        title: data.contentOne.title || "",
        description: data.contentOne.description || "",
        image: data.contentOne.image || "",
        duration: data.contentOne.duration || "", 
        category: data.contentOne.category || "",
        contentUrl: data.contentOne.contentUrl || "",
        status: data.contentOne.status || Status.active, 
      });
    }
  }, [data]);

   // Manejo del cambio de status (enum)
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = e.target.value as Status;
    setFormData({ ...formData, status: selectedStatus });
  };


  // Manejo de envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  

    try {
      // Ejecutar la mutación para actualizar el contenido
      const { data } = await updateContent({
        variables: { updateContentInput: { ...formData, id: contentId } },
      });
      console.log("Mutation data:", data);

      if (data) {
        Swal.fire("Success", "Content updated successfully", "success");
        onClose();
      }
    } catch (error) {
      console.error("Error updating content:", error);
      Swal.fire("Error", "Failed to update content", "error");
    }

    console.log(contentId);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-lightBackground dark:bg-darkBackground p-8 rounded-lg shadow-lg text-lightText dark:text-darkText">
        <h2 className="text-2xl mb-4">Edit Content</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="mb-2 w-full p-2 border border-gray-300 rounded-lg text-lightText dark:text-darkText bg-lightBackground dark:bg-darkBackground"
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="mb-2 w-full p-2 border border-gray-300 rounded-lg text-lightText dark:text-darkText bg-lightBackground dark:bg-darkBackground"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            className="mb-2 w-full p-2 border border-gray-300 rounded-lg text-lightText dark:text-darkText bg-lightBackground dark:bg-darkBackground"
          />
          <input
            type="text"
            placeholder="Duration"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            className="mb-2 w-full p-2 border border-gray-300 rounded-lg text-lightText dark:text-darkText bg-lightBackground dark:bg-darkBackground"
          />
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="mb-2 w-full p-2 border border-gray-300 rounded-lg text-lightText dark:text-darkText bg-lightBackground dark:bg-darkBackground"
          />
          <input
            type="text"
            placeholder="Content URL"
            value={formData.contentUrl}
            onChange={(e) =>
              setFormData({ ...formData, contentUrl: e.target.value })
            }
            className="mb-2 w-full p-2 border border-gray-300 rounded-lg text-lightText dark:text-darkText bg-lightBackground dark:bg-darkBackground"
          />

          {/* Select para cambiar el status */}
          <select
            name="status"
            value={formData.status || ""}
            onChange={handleStatusChange} 
            className="mb-2 w-full p-2 border border-gray-300 rounded-lg text-lightText dark:text-darkText bg-lightBackground dark:bg-darkBackground"
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value={Status.active}>Active</option>
            <option value={Status.inactive}>Inactive</option>
          </select>

          <div className="flex justify-between">
            <button
              type="submit"
              className="px-6 py-4 bg-green-600 hover:bg-green-900 rounded-full font-bold text-[#efefef]"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-4 bg-red-600 hover:bg-red-900 rounded-full font-bold text-[#efefef]"
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
