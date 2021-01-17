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
import DataTransaksi from '../transaksi/dataTransaksi'

const BasicForms = ({ match }) => {
    // const [collapsed, setCollapsed] = React.useState(true)
    // const [showElements, setShowElements] = React.useState(true)
    const [id, setid] = useState('')
    const [nama, setnama] = useState('')
    const [noHp, setnoHp] = useState('')
    const [tanggal, settanggal] = useState('')
    const [type, settype] = useState('')
    const [status, setstatus] = useState('')
    const [kurir, setkurir] = useState('')
    const [berat, setberat] = useState('')
    const [ongkir, setongkir] = useState('')

    useEffect(() => {
        if (match.params.id) {
            const user = DataTransaksi.find(user => user.id.toString() === match.params.id)
            setid(user.id)
            setnama(user.name)
            settanggal(user.tanggal)
            settype(user.type)
            setstatus(user.status)
            setkurir(user.kurir)
            setberat(user.berat)
            setongkir(user.bayar)
        }
    }, [match.params.id])

    return (
        <>
            <CRow>
                <CCol xs="12" sm="12" lg="12">
                    <CCard>
                        <CCardHeader className="font-weight-bold">
                            {match.params.id ? 'Edit Transaksi' : 'Tambah Transaksi'}
                            <DocsLink name="-Input" />
                        </CCardHeader>
                        <CCardBody>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="name">Nama</CLabel>
                                        <CInput id="name" placeholder="Enter your name" onChange={(val) => setnama(val)} defaultValue={nama} required />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="ccnumber">No Hp</CLabel>
                                        <CInput id="noHp" placeholder="noHp" onChange={(val) => setnoHp(val)} defaultValue={noHp} required />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="ccnumber">Kurir</CLabel>
                                        <CInput id="kurir" placeholder="Kurir" onChange={(val) => setkurir(val)} defaultValue={kurir} required />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol xs="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="ccnumber">Berat</CLabel>
                                        <CInput id="berat" placeholder="Berat/kg" onChange={(val) => setberat(val)} defaultValue={berat} required />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CButton block color="primary" className="d-flex ml-auto justify-content-center" style={{ width: 150 }} to="/transaksi">{match.params.id ? 'Edit Transaksi' : 'Tambah Transaksi'}</CButton>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default BasicForms
