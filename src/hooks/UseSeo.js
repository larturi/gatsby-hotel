
import { graphql, useStaticQuery } from 'gatsby';


export const UseSeo = () => {

    const data = useStaticQuery(graphql`
        query {
            datoCmsSite {
                globalSeo {
                    siteName
                    titleSuffix
                    fallbackSeo {
                        title
                        description
                    }
                }
            }
        }
    `);

    return data.datoCmsSite.globalSeo;

}


