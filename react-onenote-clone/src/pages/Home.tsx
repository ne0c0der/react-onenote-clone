// Home page is the main layout.
// This file controls the current Totes, selected Tote, and loading/saving data.

import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { loadData, saveData } from "../data/storage"; // persistent storage
import { Tote } from "../data/models";
import { v4 as uuidv4 } from "uuid"; // generate random IDs

export default function Home() {
    // Load Totes from localStorage (offline storage)
    const [totes, setTotes] = useState<Tote[]>(loadData());

// This stores the ID of the slected Tote (or null if none are available)
    const [selectedTote, setSelectedTote] = useState<string | null>(null);

// Add a new Tote
    function addTote() {
        const name = prompt("Name your new Tote:");
        if (!name) return;

        const newTote: Tote = {
            id: uuidv4(), //generate a unique ID
            name,
            books: [],
        };
        
        const updated = [...totes, newTote];
        setTotes(updated);
        saveData(updated);
    }

        // Select Tote  by ID
    function selectTote(id: string) {
        setSelectedTote(id);
    }

    return (
        <div style={{ display: "flex" }}>

            {/* Left sidebar */}
            <Sidebar
                totes={totes}
                selectedToteId={selectedTote}
                onSelectTote={selectTote}
                onAddTote={addTote}
            />

            {/* Right content area */}
            <div style={{ padding: "20px" }}>
                <h1>Welcome to ToteNotes</h1>
                <p>Select a Tote or create a new one to begin.</p>
            </div>
        </div>
    );    
}