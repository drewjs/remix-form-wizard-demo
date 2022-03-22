import { ActionFunction, Form, json, useActionData } from 'remix'

import { Button, ButtonLink } from '~/components/button'
import { H2 } from '~/components/typography'

interface ActionData {
  errors: {
    firstName?: string
    lastName?: string
    email?: string
  }
}

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData()
  let firstName = formData.get('firstName')
  let lastName = formData.get('lastName')
  let email = formData.get('email')

  let errors: ActionData['errors'] = {}

  if (!firstName) {
    errors.firstName = 'First name is required'
  }

  if (!lastName) {
    errors.lastName = 'Last name is required'
  }

  if (!email) {
    errors.email = 'Email is required'
  }

  if (Object.keys(errors).length > 0) {
    return json<ActionData>({ errors }, { status: 400 })
  }

  return json<ActionData>({ errors: {} })
}

export default function Index() {
  let actionData = useActionData() as ActionData

  return (
    <>
      <div className="mb-5 text-center">
        <H2>Your Personal Information</H2>
        <p>Please enter name and email to get started.</p>
      </div>
      <div className="border-gray-300 bg-white px-5 py-6 shadow-sm">
        <Form method="post" className="space-y-6" noValidate>
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
                aria-describedby="firstName-error"
                aria-invalid={actionData?.errors?.firstName ? true : undefined}
                className="w-full rounded border border-gray-500 px-2 py-1"
                id="firstName"
                name="firstName"
              />
              {actionData?.errors?.firstName && (
                <div className="pt-1 text-sm text-red-600" id="email-error">
                  {actionData.errors.firstName}
                </div>
              )}
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
                aria-describedby="lastName-error"
                aria-invalid={actionData?.errors?.lastName ? true : undefined}
                className="w-full rounded border border-gray-500 px-2 py-1"
                id="lastName"
                name="lastName"
              />
              {actionData?.errors?.lastName && (
                <div className="pt-1 text-sm text-red-600" id="email-error">
                  {actionData.errors.lastName}
                </div>
              )}
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
                type="email"
                aria-describedby="email-error"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                autoComplete="email"
                className="w-full rounded border border-gray-500 px-2 py-1"
                id="email"
                name="email"
              />
              {actionData?.errors?.email && (
                <div className="pt-1 text-sm text-red-600" id="email-error">
                  {actionData.errors.email}
                </div>
              )}
            </div>
          </div>
          <div>
            <ButtonLink color="light" to="/" className="mr-4">
              Back
            </ButtonLink>
            <Button type="submit">Save & Continue →</Button>
          </div>
        </Form>
      </div>
    </>
  )
}
