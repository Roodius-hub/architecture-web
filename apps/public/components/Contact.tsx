"use client"
import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, Form, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const formSchema = z.object({
  Name: z
    .string()
    .min(5, "Name must be at least 5 characters.")
    .max(32, "Name must be at most 32 characters."),
  Email: z
    .string().email()
    .min(20, "email must be at least 20 characters.")
    .max(100, "email must be at most 100 characters."),
    Number: z
    .number()
    .min(10, "Number must be at least 10 characters.")
    .max(10, "Number must be at most 10 characters."),
    description: z
    .string().email()
    .min(20, "description must be at least 20 characters.")
    .max(100, "description must be at most 100 characters."),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Number: 0,
      description: "",
    },
  })
  
  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
  }

    return <section id="contact" className="min-h-screen my-3 rounded-2xl bg-[#f5f1ea] px-6 py-20 text-black">
  <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

    {/* Left Side */}
    <div className="flex flex-col justify-between">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Contact Us
        </p>

        <h1 className="font-bowlby text-6xl uppercase leading-none md:text-8xl">
          Let’s Build
          <br />
          Your Space
        </h1>

        <p className="mt-8 max-w-md text-lg leading-relaxed text-neutral-700">
          Residential architecture, luxury elevations, interiors,
          and modern living spaces crafted with timeless aesthetics.
        </p>
      </div>
    </div>

    {/* Right Side Form */}
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>
         Write Your Message Below
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="form-rhf-demo"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <FieldGroup>
            <Controller
              name="Name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Name</FieldLabel>

                  <Input
                    {...field}
                    placeholder="Your Name"
                  />

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="Email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email</FieldLabel>

                  <Input
                    placeholder="Email"
                  />

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

              <Controller
              name="Number"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Number</FieldLabel>

                  <Input
                    placeholder="Phone Number"
                  />

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

              

            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Write Your Message</FieldLabel>

                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      rows={6}
                      className="resize-none"
                      placeholder="Describe the issue..."
                    />

                    <InputGroupAddon align="block-end">
                      <InputGroupText>
                        {field.value.length}/100
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>

                  <FieldDescription>
                    Write Your Brief Description  About Project.
                  </FieldDescription>

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={() => form.reset()}
        >
          Reset
        </Button>

        <Button type="submit" form="form-rhf-demo">
          Submit
        </Button>
      </CardFooter>
    </Card>


  </div>
</section>
}