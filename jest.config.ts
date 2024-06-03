import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
	dir: './'
})

const config: Config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}

export default createJestConfig(config)
