import { useSate } from 'react';
import { Tote } from '../../data/models';
import './Sidebar.css';

// these are the props the component expects from the parent (Home.tsx)
interface SidebarProps {
    totes: Tote[];
    selectedToteId: string | null;
    onSelectedTote: (id: string) => void
    onAddTote: () => void;
}

// Sidebar Component
export default function Sidebar({
    totes,
    selectedToteId,
    onSelectTote,
    onAddTote,
}: SidebarProps) {
    return (
        <div className="sidebar">

            {/*Header section with the title and the + button */}
            <div className="sidebar-header">
                <h2>Totes</h2>

                {/* CLicking + triggers the onAddTote function from the parent*/}
                <button onClick={onAddTote}>+</button>
            </div>

            {/*List of all Totes */}
            <ul className="tote-list">
                {totes.map((tote) => (
                    <li
                        key={tote.id} // React needs this unique ID
                        className={tote.id === selectedToteId ? "active" : ""} // Highlight when slected
                        onClick={() => onSelectTote(tote.id)} // select the Tote when clicked
                    >
                        {tote.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}