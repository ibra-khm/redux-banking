import { Checkbox, DarkThemeToggle, Table } from 'flowbite-react';
import React from 'react'
import { connect } from 'react-redux'

function Home(props) {
    console.log(props.accounts)
    return (
        
        <div className='w-screen h-screen'>
             <DarkThemeToggle />
            <div className='w-2/4 mx-auto'>
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell className="!p-4">
                        <Checkbox />
                    </Table.HeadCell>
                    <Table.HeadCell>
                        ID
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Account Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Account Number
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Account Type
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {props.accounts.map(account => {
                        return (
                            <>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="!p-4">
                                        <Checkbox />
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {account.id}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {account.customerName}
                                    </Table.Cell>
                                    <Table.Cell>
                                    {account.accountNumber}
                                    </Table.Cell>
                                    <Table.Cell>
                                    {account.accountType}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <a
                                            href=""
                                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            Edit
                                        </a>
                                    </Table.Cell>
                                </Table.Row>


                            </>
                        )
                    })}
                </Table.Body>
            </Table>
            </div>

        </div>
    );
}

const readState = (state) => {
    return {
        accounts: state.accounts
    }
}

export default connect(readState)(Home)
