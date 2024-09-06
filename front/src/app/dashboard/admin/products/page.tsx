"use client";
import React, { useState } from "react";
import AdminNavbar from "@/components/AdminNavbar/AdminNavbar";
import { gql, useQuery, useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import { Button } from "flowbite-react";
import EditContentModal from "@/components/EditContentModal/EditContentModal";

const GET_CONTENT = gql`
  query ContentAll($paginationContentArgs: PaginationContentArgs!) {
    contentAll(paginationContentArgs: $paginationContentArgs) {
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

const REMOVE_CONTENT = gql`
  mutation RemoveContent($removeContentId: String!) {
    removeContent(id: $removeContentId) {
      id
    }
  }
`;

const Products: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  const { data, loading, error, refetch } = useQuery(GET_CONTENT, {
    variables: {
      paginationContentArgs: { limit: 10, offset: 0 },
    },
  });

  const [removeContent] = useMutation(REMOVE_CONTENT);

  const handleDelete = async (contentId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This content will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await removeContent({
            variables: { removeContentId: contentId },
          });
          Swal.fire("Deleted!", "The content has been deleted.", "success");
          refetch(); // Refrescar la tabla de contenidos después de la eliminación
        } catch (error) {
          Swal.fire(
            "Error!",
            "There was an error deleting the content.",
            "error"
          );
        }
      }
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading content</p>;

  return (
    <div className="flex">
      <AdminNavbar />
      <div className="p-6 flex-1">
        <h1 className="text-4xl font-bold">Manage Products</h1>
        <div className="mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Description</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.contentAll.map((content: any) => (
                <tr key={content.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {content.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {content.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {content.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button
                      pill
                      className="bg-violet hover:bg-darkviolet text-center mr-3 px-6 py-2 ml-4"
                      onClick={() => setSelectedContent(content.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      pill
                      className="bg-red-500 hover:bg-red-700 text-center px-6 py-2 ml-4"
                      onClick={() => handleDelete(content.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal para editar contenido */}
        {selectedContent && (
          <EditContentModal
            contentId={selectedContent}
            onClose={() => setSelectedContent(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Products;