import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { appWithTranslation } from 'next-i18next'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../src/theme'
import Layouts from '../components/layouts'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<ChakraProvider theme={theme}>
				<Layouts>
					<Component {...pageProps} />
				</Layouts>
			</ChakraProvider>
		</RecoilRoot>
	)
}

export default appWithTranslation(MyApp)
