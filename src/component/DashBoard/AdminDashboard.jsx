import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({ data }) => {
    const handleLogout = () => {
        localStorage.removeItem("loggedInUser"); // Clear the logged-in user's data
        window.location.reload(); // Automatically reload the page
    };
let authData=useContext(AuthContext);
console.log(authData)
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    height: "100vh",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f8f9fa",
                    fontFamily: "Arial, sans-serif",
                    color: "#333",
                    padding: "1rem",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: "1200px",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        padding: "2rem",
                        boxSizing: "border-box",
                    }}
                >
                    <h1 style={{ textAlign: "center", color: "#007bff", fontSize: "2rem" }}>
                        Admin Dashboard
                    </h1>

                    {/* Container for form and description */}
                    <div
                        style={{
                            display: "flex",
                            gap: "2rem",
                            marginBottom: "2rem",
                            flexWrap: "wrap", // Enable wrapping for smaller screens
                        }}
                    >
                        {/* Task Section */}
                        <div
                            style={{
                                backgroundColor: "#e9ecef",
                                borderRadius: "8px",
                                padding: "1.5rem",
                                flex: "1",
                                minWidth: "280px",
                                boxSizing: "border-box",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                <h2 style={{ fontSize: "1.2rem" }}>Hello, Amit</h2>
                                <button
                                    style={{
                                        backgroundColor: "#dc3545",
                                        color: "#fff",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "4px",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                    onClick={handleLogout}
                                >
                                    Log Out
                                </button>
                            </div>

                            <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <div>
                                    <label>Task Title</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the task title..."
                                        style={{
                                            width: "100%",
                                            padding: "0.5rem",
                                            borderRadius: "4px",
                                            border: "1px solid #ccc",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label>Date</label>
                                    <input
                                        type="date"
                                        placeholder="Select a date..."
                                        style={{
                                            width: "100%",
                                            padding: "0.5rem",
                                            borderRadius: "4px",
                                            border: "1px solid #ccc",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label>Assign To</label>
                                    <input
                                        type="text"
                                        placeholder="Enter assignee's name..."
                                        style={{
                                            width: "100%",
                                            padding: "0.5rem",
                                            borderRadius: "4px",
                                            border: "1px solid #ccc",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label>Category</label>
                                    <input
                                        type="text"
                                        placeholder="Enter task category..."
                                        style={{
                                            width: "100%",
                                            padding: "0.5rem",
                                            borderRadius: "4px",
                                            border: "1px solid #ccc",
                                        }}
                                    />
                                </div>
                            </form>
                        </div>

                        {/* Description Section */}
                        <div
                            style={{
                                backgroundColor: "#e9ecef",
                                borderRadius: "8px",
                                padding: "1.5rem",
                                flex: "1",
                                minWidth: "280px",
                                maxWidth: "500px",
                                boxSizing: "border-box",
                            }}
                        >
                            <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Description</h2>
                            <textarea
                                placeholder="Enter the task description here..."
                                style={{
                                    width: "100%",
                                    height: "18.4rem",
                                    backgroundColor: "#fff",
                                    padding: "1rem",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                    resize: "none",
                                    overflowY: "auto",
                                }}
                            ></textarea>
                        </div>
                    </div>

                    {/* Task Section Below */}
                    <div
                        style={{
                            backgroundColor: "#cce5ff",
                            borderRadius: "8px",
                            padding: "1rem",
                            border: "1px solid #b8daff",
                            color: "#004085",
                            textAlign: "left",
                        }}
                    >
                        <b style={{ color: "red" }}>Task-1</b>
                        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                            <p>
                                <b>TaskTitle</b>
                            </p>
                            <p>
                                <b>TaskDate</b>
                            </p>
                        </div>
                        <b>TaskDescription</b>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
