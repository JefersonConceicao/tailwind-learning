import { InputControl, InputPrefix, InputRoot } from '@/components/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as InputFile from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { TextArea } from '@/components/Form/TextArea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900"> Settings </h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between gap-4 border-b border-zinc-200 pb-5">
          <div>
            <p className="text-lg font-medium text-zinc-900"> Personal info</p>
            <span className="font-regular mt-1 text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              <span className="text-sm font-semibold">Cancel</span>
            </Button>
            <Button variant="primary" type="submit">
              <span className="text-sm font-semibold"> Save </span>
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl
                  id="firstName"
                  name="name"
                  type="text"
                  defaultValue="Jeferson"
                />
              </InputRoot>
              <InputRoot>
                <InputControl
                  name="name"
                  type="text"
                  defaultValue="Conceição"
                />
              </InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 py-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              E-mail address
            </label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl
                id="email"
                name="email"
                type="email"
                defaultValue="jefersonmallone2000@outlook.com"
              />
            </InputRoot>
          </div>
          <div className="grid grid-cols-form gap-3 py-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile
              </span>
            </label>

            <InputFile.Root className="flex items-center gap-5">
              <InputFile.ImagePreview />
              <InputFile.Trigger />
              <InputFile.Control />
            </InputFile.Root>
          </div>

          <div className="grid grid-cols-form gap-3 py-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <InputRoot>
              <InputControl
                id="role"
                name="role"
                type="text"
                defaultValue="Software Engineer"
              />
            </InputRoot>
          </div>

          <div className="grid grid-cols-form gap-3 py-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <div>
              <Select placeholder="Select a country">
                <SelectItem value="br" text="Brazil" />
                <SelectItem value="us" text="Estados Unidos" />
                <SelectItem value="mex" text="México" />
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 py-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <div>
              <Select placeholder="Select a timezone">
                <SelectItem value="br" text="Brazil Standart Time UTC 08:00" />
                <SelectItem
                  value="us"
                  text="United States Standart Time UTC 08:00"
                />
                <SelectItem
                  value="timezone_us"
                  text="México Standart Time UTC 08:00"
                />
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 py-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="Select a timezone" defaultValue="normal">
                  <SelectItem value="normal" text="Normal" />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>

              <TextArea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia.
                 I specialise in UX/UI design, brand strategy, 
                 and Webflow development."
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 py-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Portifólio Projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <div>
              <InputFile.Root>
                <InputFile.Trigger />
                <InputFile.FileList />
                <InputFile.Control multiple />
              </InputFile.Root>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              <span className="text-sm font-semibold">Cancel</span>
            </Button>
            <Button variant="primary" type="submit">
              <span className="text-sm font-semibold"> Save </span>
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
