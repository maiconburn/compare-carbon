import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { CustomerService } from '../service/CustomersService'
import { Dropdown } from 'primereact/dropdown'
import { MultiSelect } from 'primereact/multiselect'
import Link from 'next/link'
import 'primereact/resources/themes/mdc-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

const Table = () => {
    const [customers, setCustomers] = useState(null);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [selectedRepresentatives, setSelectedRepresentatives] = useState(null);
    const [selectedProjectTypes, setSelectedProjectTypes] = useState(null)
    const [selectedCertAuthority, setSelectedCertAuthority] = useState(null)
    const dt = useRef(null);
    const representatives = [
        {name: "Amy Elsner", image: 'amyelsner.png'},
        {name: "Anna Fali", image: 'annafali.png'},
        {name: "Asiya Javayant", image: 'asiyajavayant.png'},
        {name: "Bernardo Dominic", image: 'bernardodominic.png'},
        {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
        {name: "Ioni Bowcher", image: 'ionibowcher.png'},
        {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
        {name: "Onyama Limba", image: 'onyamalimba.png'},
        {name: "Stephen Shaw", image: 'stephenshaw.png'},
        {name: "XuXue Feng", image: 'xuxuefeng.png'}
    ];

    const projectTypes = [
        'reforestation', 'social', 'renewables'
    ]

    const certAuthority = [
        'American Carbon Registry', 'American Carbon Registry, Gold Standard, Self-assessed', 'CDM, Gold Standard, Plan Vivo Standard', 'Gold Standard', 'Gold Standard, QAS Certified', 'Gold Standard, QAS Certified, Redd+', 'Plan Vivo Standard', 'QAS Certified, Verified Carbon Standard', 'Self-assessed', 'UK Woodland Carbon Code', 'Verified Carbon Standard'
    ]

    const customerService = new CustomerService()

    useEffect(() => {
        customerService.getCustomersLarge().then(data => setCustomers(data))
    }, [])

    const renderHeader = () => {
        return (
            <div className="table-header">
                List of Projects
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                </span>
            </div>
        )
    }


    const nameBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </>
        )
    }

    const credit_costBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Price</span>
                {"$ " + rowData.credit_cost.toFixed(2)}
            </>
        )
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <Link href={rowData.project_page_link}>
                <a target="_blank">
                    <Button label="Link" icon="pi pi-external-link" className="p-button-sm" />
                </a>
            </Link>
        )
    }

    const project_typeBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Project Types</span>
                <span className={classNames('customer-badge', 'project_type-' + rowData.project_type)}>{rowData.project_type_detailed}</span>
            </>
        )
    }

    const renderProjectTypesFilter = () => {
        return (
            <Dropdown value={selectedProjectTypes} options={projectTypes} onChange={onProjectTypesFilterChange}
                        itemTemplate={ProjectTypesItemTemplate} showClear placeholder="Select a Project Type" className="p-column-filter"/>
        )
    }

    const ProjectTypesItemTemplate = (option) => {
        return (
            <span className={classNames('customer-badge', 'status-' + option)}>{option}</span>
        )
    }

    const onProjectTypesFilterChange = (event) => {
        dt.current.filter(event.value, 'project_type', 'equals');
        setSelectedProjectTypes(event.value);
    }


    const cert_authorityBodyTemplate = (rowData) => {
        console.log(rowData.cert_authority)
        return (
            <>
                <span className="p-column-title">Project Types</span>
                <span className={classNames('customer-badge', 'cert_authority-' + rowData.cert_authority)}>{rowData.cert_authority}</span>
            </>
        )
    }


    const renderCertAuthorityFilter = () => {
        return (
            <Dropdown value={selectedCertAuthority} options={certAuthority} onChange={onCertAuthorityFilterChange}
                        itemTemplate={CertAuthorityItemTemplate} showClear placeholder="Select a Cert Authority" className="p-column-filter"/>
        )
    }

    const CertAuthorityItemTemplate = (option) => {
        return (
            <span className={classNames('customer-badge', 'status-' + option)}>{option}</span>
        )
    }

    const onCertAuthorityFilterChange = (event) => {
        dt.current.filter(event.value, 'cert_authority', 'equals');
        setSelectedCertAuthority(event.value);
    }

    const companyBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Vendor</span>
                {rowData.company}
            </>
        )
    }


    /*
    const countryBodyTemplate = (rowData) => {
        let { name, code } = rowData.country

        return (
            <React.Fragment>
                <span className="p-column-title">Country</span>
                <img src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={name} className={classNames('flag', 'flag-' + code)} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        const src = "showcase/demo/images/avatar/" + rowData.representative.image;

        return (
            <React.Fragment>
                <span className="p-column-title">Representative</span>
                <img alt={rowData.representative.name} src={src} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{verticalAlign: 'middle'}} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const renderRepresentativeFilter = () => {
        return (
            <MultiSelect className="p-column-filter" value={selectedRepresentatives} options={representatives}
                onChange={onRepresentativeFilterChange} itemTemplate={representativeItemTemplate} placeholder="All" optionLabel="name" optionValue="name" />
        );
    }

    const representativeItemTemplate = (option) => {
        const src = "showcase/demo/images/avatar/" + option.image;

        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={src} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{verticalAlign: 'middle'}} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{option.name}</span>
            </div>
        );
    }

    const onRepresentativeFilterChange = (event) => {
        dt.current.filter(event.value, 'representative.name', 'in');
        setSelectedRepresentatives(event.value);
    }

    const renderStatusFilter = () => {
        return (
            <Dropdown value={selectedStatus} options={statuses} onChange={onStatusFilterChange}
                        itemTemplate={statusItemTemplate} showClear placeholder="Select a Status" className="p-column-filter"/>
        );
    }

    const statusItemTemplate = (option) => {
        return (
            <span className={classNames('customer-badge', 'status-' + option)}>{option}</span>
        );
    }

    const onStatusFilterChange = (event) => {
        dt.current.filter(event.value, 'status', 'equals');
        setSelectedStatus(event.value);
    }

    const header = renderHeader();
    const representativeFilterElement = renderRepresentativeFilter();
    const statusFilterElement = renderStatusFilter();

    */
    
    const header = renderHeader()
    const ProjectTypesFilterElement = renderProjectTypesFilter()
    const CertAuthorityFilterElement = renderCertAuthorityFilter()

    return (
        <div className="datatable-projects">
            <div className="card">
                <DataTable ref={dt} value={customers}
                    header={header} className="p-datatable-customers" dataKey="id" rowHover globalFilter={globalFilter}
                    selection={selectedCustomers} onSelectionChange={e => setSelectedCustomers(e.value)}
                    paginator rows={10} emptyMessage="No customers found" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}>
                    <Column field="credit_cost" header="Price" body={credit_costBodyTemplate} sortable />
                    <Column field="name" header="Project Name" body={nameBodyTemplate} sortable />
                    <Column field="project_type" header="Project Type" body={project_typeBodyTemplate} sortable filter filterElement={ProjectTypesFilterElement} />
                    <Column sortField="company" filterField="company" header="Vendor" body={companyBodyTemplate} sortable filter filterMatchMode="contains" filterPlaceholder="Search by company"/>
                    <Column field="cert_authority" header="Certificate  Authority" body={cert_authorityBodyTemplate} sortable filter filterElement={CertAuthorityFilterElement} />
                    <Column body={actionBodyTemplate} header="Project Link" headerStyle={{width: '8em', textAlign: 'center'}} bodyStyle={{textAlign: 'center', overflow: 'visible'}} />
                </DataTable>
            </div>
        </div>
    );
}

export default Table
                 
/*
<Column sortField="representative.name" filterField="representative.name" header="Project Location" body={representativeBodyTemplate} sortable filter filterElement={representativeFilterElement} />
<Column field="status" header="Project Type" body={statusBodyTemplate} sortable filter filterElement={statusFilterElement} />
<Column sortField="country.name" filterField="country.name" header="Vendor" body={countryBodyTemplate} sortable filter filterMatchMode="contains" filterPlaceholder="Search by country"/>
<Column sortField="country.name" filterField="country.name" header="Certificate Authority" body={countryBodyTemplate} sortable filter filterMatchMode="contains" filterPlaceholder="Search by country"/>
<Column body={actionBodyTemplate} headerStyle={{width: '8em', textAlign: 'center'}} bodyStyle={{textAlign: 'center', overflow: 'visible'}} />
*/