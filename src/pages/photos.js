import React from 'react';
import Heading from "src/modules/Heading";
import {LightBox, LightBoxImage, UseLightBox} from "src/modules/LightBox";
import {Gallery, GalleryImage} from "src/modules/Gallery";
import Application, {ApplicationHelmet} from "src/modules/Application";
import {GetPhotos} from "src/api/PhotoApi";

export async function getStaticProps() {
    const photos = await GetPhotos();

    return {
        props: {
            photos,
        },
    };
}

const Photos = ({photos}) => {
    const [
        lightBoxOpen,
        setLightBoxOpen,
        lightBoxIndex,
        setLightBoxIndex,
        handleLightBoxOpen
    ] = UseLightBox(false, 0);

    return (
        <Application>
            <ApplicationHelmet title="Bryan Carder Photos" description="Photo gallery page for Bryan Carders portfolio site"/>
            <Heading level={1}>Photos I&apos;ve Taken</Heading>
            <Gallery>
                {photos.map((image, index) => (
                    <GalleryImage key={image.src}
                                 src={image.thumbnail}
                                 alt={image.src}
                                 width={200}
                                 height={(200 / image.width) * image.height}
                                 onClick={() => handleLightBoxOpen(index)}
                    />
                ))}
            </Gallery>

            <LightBox open={lightBoxOpen}
                      onClose={() => setLightBoxOpen(false)}
                      index={lightBoxIndex}
                      setIndex={setLightBoxIndex}
                      count={photos.length}>
                    <LightBoxImage src={photos[lightBoxIndex].src}
                                   alt={photos[lightBoxIndex].src}
                                   width={photos[lightBoxIndex].width}
                                   height={photos[lightBoxIndex].height}/>
            </LightBox>
        </Application>
    );
};

export default Photos;
