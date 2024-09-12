"use client";
import React, { useContext, useEffect, useState } from "react";
import AdminNavbar from "@/components/AdminNavbar/AdminNavbar";
import { gql, useQuery, useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import EditContentModal from "@/components/EditContentModal/EditContentModal";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/Loading/Loading";

const GET_CONTENT = gql`
 query ContentAllDashboard {
  contentAllDashboard {
    id
    title
    description
    image
    duration
    category
    type
    status
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
  const { isLogged, isAdmin } = useContext(UserContext);
  const router = useRouter();
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  const { data, loading, error, refetch } = useQuery(GET_CONTENT);

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

  console.log("data",data);
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <p className="text-red-500 text-2xl">Error loading content</p>
      </div>
    );
  }
  return  (
    <div className="flex">
      <AdminNavbar />
      <div className="p-6 flex-1">
        <h1 className="text-4xl font-bold">Manage Products</h1>
        <div className="mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.contentAllDashboard?.map((content: any) => (
                <tr key={content.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {content.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {content?.status}
                  </td>
                  <td className="py-4 whitespace-nowrap">
                    <button
                      className="bg-violet hover:bg-darkviolet text-[#efefef]  rounded-full text-center mr-3 px-6 py-2 ml-4"
                      onClick={() => setSelectedContent(content.id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="py-4 whitespace-nowrap">
                    <button
                      className=" bg-red-600 hover:bg-red-900  text-[#efefef] rounded-full text-center mr-3 px-6 py-2 ml-4"
                      onClick={() => handleDelete(content.id)}
                    >
                      Delete
                    </button>
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
  ) ;
};

export default Products;
