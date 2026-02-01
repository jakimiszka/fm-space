import { JSX, useState } from 'react';
import styles from './Pages.module.scss';

interface GenericGalleryProps<T extends { name: string; images: { png: string; webp: string } }> {
    data: T[];
    imageMap: Record<string, string>;
    className: string;
    renderInfo: (item: T) => JSX.Element;
}

export const GenericGallery = <T extends { name: string; images: { png: string; webp: string }}>({
    data,
    imageMap,
    className,
    renderInfo
}: GenericGalleryProps<T>) => {
    const [currentItem, setCurrentItem] = useState<T>(data[0]);

    return (
        <div className={styles[className]}>
            <div className={styles[`${className}--content`]}>
                <ul>
                    {data.map(item => (
                        <li key={item.name} onClick={() => setCurrentItem(item)}>
                            {item.name.toUpperCase()}
                        </li>
                    ))}
                </ul>
                {renderInfo(currentItem)}
            </div>
            <div className={styles[`${className}--imageWrapper`]}>
                <img src={imageMap[currentItem.name]} alt={currentItem.name} />
            </div>
        </div>
    );
};