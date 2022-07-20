import { Heading } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export const getStaticProps: GetStaticProps = async({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || 'en', ['common', 'index'])),
		},
	}
}

const Homepage = () => {
	const {t} = useTranslation('common')
	return (
		<Heading>
			{t('index.home')}
		</Heading>
	)
}

export default Homepage
