export default function AdminDashboard() {
    const handleLogout = () => {
        localStorage.removeItem('loggedInUser'); // Clear the logged-in user's data
       
        window.location.reload(); // Automatically reload the page
      };
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f8f9fa", // Light background for better contrast
                fontFamily: "Arial, sans-serif", // Cleaner, modern font
                color: "#333", // Neutral font color
            }}
        >
            <div
                style={{
                    width: "80%",
                    maxWidth: "1200px",
                    backgroundColor: "#fff", // White card-like container
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                    padding: "2rem",
                }}
            >
                <h1 style={{ textAlign: "center", color: "#007bff" }}>Admin Dashboard</h1>

                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                    {/* Task Section */}
                    <div
                        style={{
                            backgroundColor: "#e9ecef", // Soft light gray background
                            borderRadius: "8px",
                            padding: "1.5rem",
                            flex: "1",
                            minWidth: "300px",
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
                                    backgroundColor: "#dc3545", // Red for emphasis
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

                        <form>
                            <div style={{ marginBottom: "1rem" }}>
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
                            <div style={{ marginBottom: "1rem" }}>
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
                            <div style={{ marginBottom: "1rem" }}>
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
                            <div style={{ marginBottom: "1rem" }}>
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
                            backgroundColor: "#e9ecef", // Same background for consistency
                            borderRadius: "8px",
                            padding: "1.5rem",
                            flex: "1",
                            minWidth: "300px",
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
                                resize: "none", // Prevent manual resizing
                                overflowY: "auto",
                            }}
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}
