export default function EmployeeDashboard() {
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
                        Hello, Amit
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
                        }}
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
                        <h1 style={{ fontSize: "2rem", margin: 0, color: "#333" }}>0</h1>
                        <p style={{ fontWeight: "bold", margin: 0 }}>New Tasks</p>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#28a745", // Green
                            borderRadius: "8px",
                            padding: "1rem",
                            textAlign: "center",
                        }}
                    >
                        <h1 style={{ fontSize: "2rem", margin: 0, color: "#fff" }}>3</h1>
                        <p style={{ fontWeight: "bold", margin: 0, color: "#fff" }}>
                            Completed
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
                        <h1 style={{ fontSize: "2rem", margin: 0, color: "#fff" }}>4</h1>
                        <p style={{ fontWeight: "bold", margin: 0, color: "#fff" }}>
                            Accepted
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
                        <h1 style={{ fontSize: "2rem", margin: 0, color: "#fff" }}>1</h1>
                        <p style={{ fontWeight: "bold", margin: 0, color: "#fff" }}>
                            Failed
                        </p>
                    </div>
                </div>

                {/* Notes Section */}
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
                    <p style={{ margin: 0, fontSize: "0.9rem" }}>
                        Please ensure to complete all pending tasks within the deadline to maintain productivity. If you face any challenges, feel free to reach out to your manager.
                    </p>
                </div>

                {/* Additional Notes Section 1 */}
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
                    <p style={{ margin: 0, fontSize: "0.9rem" }}>
                        New company-wide update is scheduled for next week. Ensure all systems are up to date before the deployment.
                    </p>
                </div>

                {/* Additional Notes Section 2 */}
                <div
                    style={{
                        backgroundColor: "#fff3cd", // Light yellow for caution
                        borderRadius: "8px",
                        padding: "1rem",
                        border: "1px solid #ffeeba", // Slightly darker yellow border
                        color: "#856404", // Dark yellow text
                        textAlign: "left",
                    }}
                >
                    <p style={{ margin: 0, fontSize: "0.9rem" }}>
                        Remember to submit your weekly report by Friday. Late submissions may affect performance reviews.
                    </p>
                </div>
            </div>
        </div>
    );
}
