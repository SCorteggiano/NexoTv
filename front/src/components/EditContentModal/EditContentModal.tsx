"use client";
import React, { useState, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { IEditContentModalProps } from "@/interfaces";
import { Button } from "flowbite-react";

const GET_CONTENT = gql`
  query Content($id: String!) {
    content(id: $id) {
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

const EditContentModal: React.FC<IEditContentModalProps> = ({
  contentId,
  onClose,
}) => {
  const { data, loading, error } = useQuery(GET_CONTENT, {
    variables: { id: contentId },
  });
  const [updateContent] = useMutation(UPDATE_CONTENT);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    duration: "",
    category: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        title: data.content.title,
        description: data.content.description,
        image: data.content.image,
        duration: data.content.duration,
        category: data.content.category,
      });
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateContent({
        variables: { updateContentInput: { ...formData, id: contentId } },
      });
      onClose();
    } catch (error) {
      console.error("Error updating content:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading content</p>;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Edit Content</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="mb-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="mb-2"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            className="mb-2"
          />
          <input
            type="text"
            placeholder="Duration"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            className="mb-2"
          />
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="mb-2"
          />
          <div className="flex justify-between">
            <Button pill
              type="submit"
              className="px-4 py-2 rounded-lg"
              color={"green"}
            >
              Save Changes
            </Button>
            <Button pill
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg"
              color={"red"}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContentModal;
