import * as React from 'react';
import { useState } from 'react';
import CheckboxesTags from '../Components/CheckboxesTags'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { IconButton, Stack } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DataGridDemo from '../Components/DataGridTable';
import SendIcon from '@mui/icons-material/Send';
import {FadeLoader} from 'react-spinners'

const axios = require('axios');

export default function SearchCandidates () {
    const [selectedRoles, setSelectedRoles] = useState([{titles:[], exp: ""}])
    const [selectedSkills, setSelectedSkills] = useState([])
    const [totalExp, setTotalExp] = useState("")
    const [relationFirst, setRelationFirst] = useState(false)
    const [relationSecond, setRelationSecond] = useState(false)
    const [tableData, setTableData] = useState([])
    const [isTableLoading, setTableLoading] = useState(false)

    const handleSelectedRoles = (vals, idx) => {
        setSelectedRoles(state => {
            const newState = [...state]
            newState[idx].titles = vals
            return newState
        })
    }
    const handleRolesExp = (val, idx) => {
        setSelectedRoles(state => {
            const newState = [...state]
            newState[idx].exp = val
            return newState
        })
    }
    const addRoles = () => {
        setSelectedRoles(state => [...state, {titles:[], exp: ""}])
    }
    const removeRoles = () => {
        setSelectedRoles(state => {
            const newState = [...state]
            newState.pop()
            return newState
        })
    }
    const search = () => {
        debugger
        console.log({selectedRoles, selectedSkills, totalExp, relationFirst, relationSecond})
        
        // set loader
        setTableLoading(true)
        // fetch data
        axios.get("").then(data => {
            setTableLoading(false)
            setTableData(data)
        })
    }

    const send = () => {
        axios.get("").then(_ => {})
    }

    return (<>
    <header className='app-header'>
        {/* <link rel="icon" href="/src/Assets/cylogo.png" type="image/png"></link> */}
        {/* <img src="/src/Assets/cylogo.png" alt="" /> */}
    </header>
    <div className="content">
    <Stack spacing={1} className="search">
        {
            selectedRoles.map((curr, idx) => 
                <Stack key={idx} direction="row" spacing={1} alignItems="center">
                <CheckboxesTags  id={idx} data={jobTitles} placeholder={"Roles"} label={"Roles"} setSelectedTags={handleSelectedRoles}/>
                <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Years in role" placeholder="Years in role" onChange={(target) => handleRolesExp(target.target.value, idx)}/>
                {
                    idx === selectedRoles.length - 1 && 
                    <IconButton size="large" onClick={addRoles}>
                        <AddIcon fontSize="inherit"/>
                    </IconButton>
                }
                {
                    idx !== selectedRoles.length - 1 && 
                    <IconButton size="large" onClick={removeRoles}>
                        <RemoveIcon fontSize="inherit"/>
                    </IconButton>
                }
                </Stack>
            )
        }   
    <Stack direction="row" spacing={1} alignItems="center">
    <CheckboxesTags data={skills} placeholder={"Skills"} label={"Skills"} setSelectedTags={setSelectedSkills}/>
    <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Years of experience" placeholder="Years of experience" onChange={e => setTotalExp(e.target.value)}/>
    <FormControlLabel control={<Checkbox />} label="1st" onChange={e => {
        setRelationFirst(e.target.checked)}}/>
    <FormControlLabel control={<Checkbox />} label="2nd"  onChange={e => setRelationSecond(e.target.checked)}/>
    </Stack>
    <Stack direction="row" spacing={1} alignItems="center" >
    <IconButton size="large" onClick={search}>
        <SearchIcon fontSize="Large"/>
        <span>Search</span>
    </IconButton>
    <IconButton size="large" onClick={send}>
        <SendIcon fontSize="Large"/>
        <span>Send</span>
    </IconButton>
    </Stack>
    </Stack>
    </div>
    <div className="center">
    {
        isTableLoading && <FadeLoader />
    }
    </div>
    {
        tableData.length > 0 && <DataGridDemo rows={tableData}></DataGridDemo>

    }
    </>)
}

const skills = [
        {
            "title": "python"
        },
        {
            "title": "ruby"
        },
        {
            "title": "aws"
        },
        {
            "title": "rds"
        },
        {
            "title": "s3"
        },
        {
            "title": "postgres"
        },
        {
            "title": "mongodb"
        },
        {
            "title": "elastic search"
        },
        {
            "title": "git"
        },
        {
            "title": "mysql"
        },
        {
            "title": "open search"
        },
        {
            "title": "svn"
        },
        {
            "title": "perl"
        },
        {
            "title": "c#"
        },
        {
            "title": "cpp"
        },
        {
            "title": "athena"
        },
        {
            "title": "redshift"
        },
        {
            "title": "databricks"
        },
        {
            "title": "ansible"
        },
        {
            "title": "terraform"
        },
        {
            "title": "docker"
        },
        {
            "title": "Kubernetes"
        },
        {
            "title": "k8s"
        },
        {
            "title": "couchbase"
        },
        {
            "title": "timescaledb"
        },
        {
            "title": "openshift"
        },
        {
            "title": "ecs"
        },
        {
            "title": "ebs"
        },
        {
            "title": "redis"
        },
        {
            "title": "bigquery"
        },
        {
            "title": "bun maker"
        },
        {
            "title": "Open Source"
        },
        {
            "title": "Linux"
        },
        {
            "title": "Programming"
        },
        {
            "title": "Networking"
        },
        {
            "title": "TCP/IP"
        },
        {
            "title": "Bash"
        },
        {
            "title": "jQuery"
        },
        {
            "title": "OOP"
        },
        {
            "title": "Nginx"
        },
        {
            "title": "PyCharm"
        },
        {
            "title": "Node.js"
        },
        {
            "title": "Apache"
        },
        {
            "title": "Athena"
        },
        {
            "title": "cloud"
        },
        {
            "title": "amazon could"
        },
        {
            "title": "azure"
        },
        {
            "title": "gcp"
        },
        {
            "title": "google cloud"
        },
        {
            "title": "vue.js"
        },
        {
            "title": "vue"
        },
        {
            "title": "node"
        },
        {
            "title": "go"
        },
        {
            "title": "golang"
        },
        {
            "title": "rustlang"
        },
        {
            "title": "rust"
        },
        {
            "title": "dotnetcore"
        },
        {
            "title": "dotnet core"
        },
        {
            "title": "java"
        },
        {
            "title": "django"
        },
        {
            "title": "etl"
        },
        {
            "title": "kafka"
        },
        {
            "title": "pyspark"
        },
        {
            "title": "rabbitmq"
        },
        {
            "title": "pgsql"
        },
        {
            "title": "bash"
        },
        {
            "title": "linux"
        },
        {
            "title": "wireshark"
        },
        {
            "title": "tshark"
        },
        {
            "title": "tcpdump"
        },
        {
            "title": "netcat"
        },
        {
            "title": "ncat"
        },
        {
            "title": "tcp/ip"
        },
        {
            "title": "ip/tcp suit"
        },
        {
            "title": "osi model"
        },
        {
            "title": "internet protocols"
        },
        {
            "title": "mobile communications"
        },
        {
            "title": "plsql"
        },
        {
            "title": "mssql"
        },
        {
            "title": "source control"
        },
        {
            "title": "VCS"
        },
        {
            "title": "Version Control"
        },
        {
            "title": "IoT"
        }
    ]
const jobTitles = [
        {
            "title": "Backend Python Developer"
        },
        {
            "title": "Backend Developer"
        },
        {
            "title": "Frontend Developer"
        },
        {
            "title": "Fullstack Developer"
        },
        {
            "title": "Rust Software Egineer"
        },
        {
            "title": "Python Team Leader"
        },
        {
            "title": "Ruby Software Developer"
        },
        {
            "title": "Sales Engineer"
        },
        {
            "title": "Devops Engineer"
        },
        {
            "title": "Human Resources Director"
        },
        {
            "title": "DevOps Tech Lead"
        },
        {
            "title": "Software Architect"
        },
        {
            "title": "Cyber Analyst"
        },
        {
            "title": "Cyber Researcher"
        },
        {
            "title": "Marketing Content Manager"
        },
        {
            "title": "Data Engineer"
        },
        {
            "title": "Senior Data Engineer"
        },
        {
            "title": "R&D Team Leader"
        },
        {
            "title": "Cyber Network Analyst"
        },
        {
            "title": "Product Manager"
        },
        {
            "title": "Project Manager"
        },
        {
            "title": "VP International Sales"
        },
        {
            "title": "Head of IoT Sales"
        },
        {
            "title": "Regional Sales Director"
        },
        {
            "title": "Account Executive"
        },
        {
            "title": "Client Services Leader"
        },
        {
            "title": "Strategic Talent Advisor"
        },
        {
            "title": "Head Of Operations"
        },
        {
            "title": "Start up growth acceleration expert"
        },
        {
            "title": "Executive Advisor"
        },
        {
            "title": "Global Head of Customer Success"
        },
        {
            "title": "Business Development Manager"
        },
        {
            "title": "VP Business Development"
        },
        {
            "title": "Marketing Operations & Growth Manager"
        },
        {
            "title": "US Operations Manager"
        },
        {
            "title": "Senior Developer"
        },
        {
            "title": "Director"
        },
        {
            "title": "Channels"
        },
        {
            "title": "CTO"
        },
        {
            "title": "Human Resources Operations Manager"
        },
        {
            "title": "VP Operations"
        },
        {
            "title": "Software Developer"
        }
    ]
