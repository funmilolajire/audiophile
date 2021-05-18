import { FC } from 'react';
import Head from 'next/head';
import _ from 'lodash';

const Meta: FC<Meta> = ({ title, description, keywords }) => (
    <>
        <Head>
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta httpEquiv="X-UA-Compatible" content="IE=7" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <title>Audiophile | {_.upperFirst(title)}</title>
        </Head>
    </>
)

export default Meta
