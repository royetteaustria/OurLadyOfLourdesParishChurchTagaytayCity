const handleReservationError = (error, res) => {
    const SchemaErrors= { available: '', status: '' };

    if (error.errors) {
        Object.values(error.errors).forEach(error => {
            SchemaErrors[error.properties.path] = error.properties.message;
        });
        return res.status(500).json(SchemaErrors);
    }  else {
        // Log the error for debugging purposes
        console.error(error);
        return res.status(500).json({ error: "Something went wrong on the server." });
    }
}

export default handleReservationError;