import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CButton,
    CCol,
    CDataTable,
    CRow,
    CPagination
} from '@coreui/react'
import DataTransaksi from './dataTransaksi'

const getBadge = status => {
    switch (status) {
        case 'selesai': return 'success'
        case 'diproses': return 'primary'
        default: return 'danger'
    }
}

const Transaksi = () => {
    const history = useHistory()
    const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
    const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
    const [page, setPage] = useState(currentPage)

    const pageChange = newPage => {
        currentPage !== newPage && history.push(`/transaksi?page=${newPage}`)
    }

    useEffect(() => {
        currentPage !== page && setPage(currentPage)
    }, [currentPage, page])

    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        <span className="d-flex flex-row justify-content-between align-items-center">
                            <span className="font-weight-bold">Transaksi</span>
                            <div className="d-flex flex-row w-100 align-items-end justify-content-end">
                                <CButton block color="primary" className="w-100" style={{ maxWidth: 110, fontSize: 12 }} to="/transaksi/tambah">Transaksi Baru</CButton>
                                <CButton block color="primary" variant="outline" className="w-100 ml-1" style={{ maxWidth: 100, fontSize: 12 }} to="/transaksi/tambah"> Cashback</CButton>
                            </div>
                        </span>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={DataTransaksi}
                            fields={[
                                { key: 'name', _classes: 'font-weight-bold', label: 'Nama' }, 'noHp',
                                'tanggal', 'kurir', { key: 'berat', label: 'berat/kg' }, { key: 'bayar', label: 'ongkir' }, 'status', 'resi'
                            ]}
                            hover
                            striped
                            itemsPerPage={15}
                            activePage={page}
                            clickableRows
                            onRowClick={(item) => history.push(`/transaksi/${item.id}`)}
                            scopedSlots={{
                                'status':
                                    (item) => (
                                        <td>
                                            <CBadge color={getBadge(item.status)}>
                                                {item.status}
                                            </CBadge>
                                        </td>
                                    )
                            }}
                        />
                        <CPagination
                            activePage={page}
                            onActivePageChange={pageChange}
                            pages={5}
                            doubleArrows={false}
                            align="center"
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Transaksi
