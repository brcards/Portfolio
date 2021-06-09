import React from 'react';
import {Helmet as ReactHelmet} from "react-helmet"
import PropTypes from "prop-types";

const ApplicationHelmet = ({title, description, meta = []}) => {
    const author = "Bryan Carder";

    return (
        <ReactHelmet
            htmlAttributes={{
                lang: `en`,
            }}
            title={title}
            meta={[
                {
                    name: `description`,
                    content: description
                },
                {
                    name: `author`,
                    content: author
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: description
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: author
                },
                {
                    name: `twitter:title`,
                    content: title
                },
                {
                    name: `twitter:description`,
                    content: description
                },
                {
                    name: `charset`,
                    content: `utf-8`
                },
                {
                    name: `viewport`,
                    content: `width=device-width, initial-scale=1, shrink-to-fit=no`
                }
            ].concat(meta)} />
    );
};

ApplicationHelmet.propTypes = {
    /**
     * Title of the page
     */
    title: PropTypes.string,
    /**
     * Description for the page
     */
    description: PropTypes.string,
};

export default ApplicationHelmet;