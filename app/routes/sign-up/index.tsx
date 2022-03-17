import { ActionFunction, Form } from 'remix'

import { Button, ButtonLink } from '~/components/button'
import { H2 } from '~/components/typography'

export let action: ActionFunction = ({ request }) => {
  console.log('request', request)
}

export default function Index() {
  return (
    <>
      <div className="mb-5 text-center">
        <H2>Your Personal Information</H2>
        <p>Please enter name and email to get started.</p>
      </div>
      <div className="border-gray-300 bg-white px-5 py-6 shadow-sm">
        <Form method="post" className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                className="block w-full rounded-sm border-gray-300 shadow-sm sm:text-sm"
                id="firstName"
                name="firstName"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                className="block w-full rounded-sm border-gray-300 shadow-sm sm:text-sm"
                id="lastName"
                name="lastName"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                type="text"
                className="block w-full rounded-sm border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                id="email"
                name="email"
              />
            </div>
          </div>
          <div>
            <ButtonLink to="/" className="mr-4" color="ghost">
              Back
            </ButtonLink>
            <Button>Next Step →</Button>
          </div>
        </Form>
      </div>
    </>
  )
}
