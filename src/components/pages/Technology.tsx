interface TechnologyProps {
    data: Array<{
        name: string;
        images: {
            portrait: string;
            landscape: string;
        };
        description: string;
    }>;
}

export const Technology = ({ data }: TechnologyProps) => {
    return (
        <div>
            <h1>Technology Page</h1>
        </div>
    );
}