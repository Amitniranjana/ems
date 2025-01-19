
export default function EmployeeDashboard({ data }) {
    const handleLogout = () => {
        localStorage.removeItem('loggedInUser'); // Clear the logged-in user's data

        window.location.reload(); // Automatically reload the page
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#f0f2f5", // Light, neutral background
                fontFamily: "Arial, sans-serif",
            }}
        >
            <div
                style={{
                    width: "90%",
                    maxWidth: "600px",
                    backgroundColor: "#ffffff", // White card for clean contrast
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                    padding: "2rem",
                }}
            >
                {/* Header Section */}
                <h1
                    style={{
                        textAlign: "center",
                        color: "#007bff", // Corporate blue
                        marginBottom: "1.5rem",
                    }}
                >
                    Employee Dashboard
                </h1>

                {/* Greeting Section */}
                <div
                    style={{
                        backgroundColor: "#e9ecef", // Soft gray for a card-like section
                        borderRadius: "8px",
                        padding: "1.5rem",
                        marginBottom: "1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2 style={{ margin: 0, fontSize: "1.2rem", color: "#333" }}>
                        Hello, {data?.firstName || "user"}
                    </h2>
                    <button
                        style={{
                            backgroundColor: "#dc3545", // Red for log-out button
                            color: "#fff",
                            padding: "0.5rem 1rem",
                            borderRadius: "4px",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "0.9rem",
                        }} onClick={handleLogout}
                    >
                        Log Out
                    </button>
                </div>

                {/* Task Overview Section */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1rem",
                        marginBottom: "1.5rem",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#ffc107", // Yellow
                            borderRadius: "8px",
                            padding: "1rem",
                            textAlign: "center",
                        }}
                    >
                        <h1 style={{ fontSize: "2rem", margin: 0, color: "#333" }}>{data.taskCounts.newTask}</h1>
                        <p style={{ fontWeight: "bold", margin: 0 }}>
                            <b>New Task</b>  </p>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#28a745", // Green
                            borderRadius: "8px",
                            padding: "1rem",
                            textAlign: "center",
                        }}
                    >
                        <h1 style={{ fontSize: "2rem", margin: 0, color: "#fff" }}>{data.taskCounts.completed}</h1>
                        <p style={{ fontWeight: "bold", margin: 0, color: "#fff" }}>
                            <b>completed</b>
                        </p>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#fd7e14", // Orange
                            borderRadius: "8px",
                            padding: "1rem",
                            textAlign: "center",
                        }}
                    >
                        <h1 style={{ fontSize: "2rem", margin: 0, color: "#fff" }}>{data.taskCounts.active}</h1>
                        <p style={{ fontWeight: "bold", margin: 0, color: "#fff" }}>
                            <b>Active</b>
                        </p>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#e83e8c", // Pink
                            borderRadius: "8px",
                            padding: "1rem",
                            textAlign: "center",
                        }}
                    >
                        <h1 style={{ fontSize: "2rem", margin: 0, color: "#fff" }}>{data.taskCounts.failed}</h1>
                        <p style={{ fontWeight: "bold", margin: 0, color: "#fff" }}>
                            Failed
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        backgroundColor: "#cce5ff", // Light blue for info
                        borderRadius: "8px",
                        padding: "1rem",
                        border: "1px solid #b8daff", // Slightly darker blue border
                        color: "#004085", // Dark blue text
                        textAlign: "left",
                        marginBottom: "1rem",
                    }}
                >
                    <b style={{ color: "red" }}>Task-1</b>
                    <div style={{ display: "flex", gap: "4rem" }}>
                        <p>
                            <b>TaskTitle</b> {data.tasks[0].taskTitle}</p>
                        <p> <b>TaskDate</b> {data.tasks[0].taskDate}</p>
                    </div>
                    <b>TaskDescription</b>  {data.tasks[0].taskDescription}
                    <br />

                </div>

                <div
                    style={{
                        backgroundColor: "#f8d7da", // Light red for attention
                        borderRadius: "8px",
                        padding: "1rem",
                        border: "1px solid #f5c2c7", // Slightly darker border
                        color: "#842029", // Dark red text
                        textAlign: "left",
                        marginBottom: "1rem",
                    }}
                >
                    <b style={{ color: "red" }}>Task-2</b>
                    <div style={{ display: "flex", gap: "4rem" }}>
                        <p>
                            <b>TaskTitle</b> {data.tasks[1].taskTitle}</p>
                        <p> <b>TaskDate</b> {data.tasks[1].taskDate}</p>
                    </div>
                    <b>TaskDescription</b>  {data.tasks[1].taskDescription}

                </div>
                {/* Additional Notes Section 2 */}
            </div>
        </div>
    );
}
