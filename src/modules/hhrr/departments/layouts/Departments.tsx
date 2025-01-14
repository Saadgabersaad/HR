import { Heading, Page } from 'modules/core/components/page'
import { HeadingActions } from 'modules/core/components/page/Actions'
import { Search } from 'modules/core/components/Search'
import { useDepartments } from '../hooks/use-departments'
import { Table } from '../components/Table'
import { AddDepartment } from './AddDepartment'

export default function Departments() {
  const {
    data,
    onSearch,
    isLoading,
    onCreateDepartment
  } = useDepartments()

  console.log(isLoading)
    console.log(data)

  return (
    <Page>
      <Heading title='Departments' description={`View your Company’s Departments`}>
        <HeadingActions
          buttonText={'Add Department'}
          mainModal={<AddDepartment create={onCreateDepartment} />}
        />
      </Heading>
      <Search onSearch={onSearch} />
      <Table
        rows={data.data}
        loading={isLoading}
      />
    </Page>
  )
}
