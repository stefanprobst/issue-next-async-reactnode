import type { ReactNode } from "react";

export default function IndexPage(): ReactNode {
	return (
		<main>
			<TestComponent />
		</main>
	)
}

async function TestComponent(): Promise<ReactNode> {
	return <h1>Hello, world!</h1>
}
