import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

type GitStatsResp = {
    pushed_at: string;
    open_issues_count: number;
};

const GitStats = () => {
    const [pushedAt, setPushedAt] = useState('');
    const [openIssuesCount, setOpenIssuesCount] = useState(0);
    useEffect(() => {
        const fetchGitStats = async (url: URL) => {
            console.log(url.toString());
            const res = await axios.get<GitStatsResp>(url.toString());
            const { pushed_at, open_issues_count } = res.data;
            setPushedAt(moment(pushed_at).format('LL'));
            setOpenIssuesCount(open_issues_count);
        };
        fetchGitStats(new URL('https://api.github.com/repos/RyanFLi/HomePage'));
    }, []);

    return (
        <table className='table table-striped mt-5'>
            <tbody>
                <tr>
                    <td width='70%'>Last updated at</td>
                    <td>{pushedAt}</td>
                </tr>
                <tr>
                    <td width='70%'>Open github issues</td>
                    <td>{openIssuesCount}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default GitStats;
