interface CrewProps {
    data: Array<{
        name: string;
        images: {
            png: string;
            webp: string;
        };
        role: string;
        bio: string;
    }>;
}

export const Crew = ({ data }: CrewProps) => {
    return (
        <div>
            <h1>Crew Page</h1>
        </div>
    );
}