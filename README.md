# Project Setup Instructions

This document provides instructions on how to set up and run the project.

## Prerequisites

* **Node.js** and **npm** (or **yarn**) installed on your system.

## Installation

1.  **Start the Mock Database Instance:**
    ```bash
    json-server --watch apimock.json
    ```
    This command will start a mock JSON server based on the data in the `apimock.json` file.
    **Note:** The mock database instance will typically run on port `3000`. If you need to change this port, you can modify it in the `.env` file.

2.  **Install Dependencies:**
    ```bash
    yarn install
    ```

3.  **Start the Project:**
    ```bash
    yarn dev
    ```

## Notes

* Ensure that the `apimock.json` file exists in the root of your project directory if you intend to use the mock database.