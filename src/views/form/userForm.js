import React, { useState, useEffect } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormGroup,
    CInput,
    CLabel,
    CRow,
    CButton
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import usersData from '../users/UsersData'

const UserForm = ({ match }) => {

    const [id, setId] = useState('')
    const [nama, setNama] = useState('')
    const [nohp, setNohp] = useState('')
    const [registered, setRegistered] = useState('')
    const [type, setType] = useState('')
    const [saldo, setSaldo] = useState('')
    const [alamat, setAlamat] = useState('')

    useEffect(() => {
        if (match.params.id) {
            const user = usersData.find(user => user.id.toString() === match.params.id)
            setId(user.id)
            setNama(user.name)
            setRegistered(user.tanggal)
            setType(user.type)
            setNohp(user.noHp)
            setSaldo(user.saldo)
        }
    }, [match.params.id])

    return (
        <>
            <CRow>
                <CCol xs="12" sm="12" lg="12">
                    <CCard>
                        <CCardHeader className="font-weight-bold">
                            {match.params.id ? 'Edit User' : 'Tambah User'}
                            <DocsLink name="-Input" />
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Nama</CLabel>
                                        <CInput id="name" placeholder="Enter your name" onChange={(val) => setNama(val)} defaultValue={nama} required />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="ccnumber">No HP</CLabel>
                                        <CInput id="noHp" placeholder="No HP" onChange={(val) => setNohp(val)} defaultValue={nohp} required />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="ccnumber">Type</CLabel>
                                        <CInput id="type" placeholder="Type" onChange={(val) => setType(val)} defaultValue={type} required />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="ccnumber">saldo</CLabel>
                                        <CInput id="saldo" placeholder="saldo/kg" onChange={(val) => setSaldo(val)} defaultValue={saldo} required />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CButton block color="primary" className="d-flex ml-auto justify-content-center" style={{ width: 150 }} to="/transaksi">{match.params.id ? 'Edit User' : 'Tambah User'}</CButton>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default UserForm