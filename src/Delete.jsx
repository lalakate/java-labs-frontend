export default function Delete({ item, fetchStudents }) {
  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:8080/api/v1/student/delete/${item.id}`,
      {
        method: 'DELETE',
      }
    );
    fetchStudents();
  };

  console.log(item.id);
  return (
    <button className="delete-button" onClick={handleDelete}>
      delete
    </button>
  );
}