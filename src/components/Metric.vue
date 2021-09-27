<template>
    <table class="styled-table">
        <thead>
            <tr>            
                <th>chassis</th>
                <th>moduleNumber</th>
                <th>moduleType</th>
                <th>originalValue</th>
                <th>referenceValue</th>
                <th>loadValue</th>
                <th>loadLevel</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="metricValueByModule in metric.metricValuesByModule" :key="metricValueByModule.moduleNumber">
               <th>{{ metricValueByModule.chassis }}</th>
               <th>{{ metricValueByModule.moduleNumber }}</th>
               <th>{{ metricValueByModule.moduleType }}</th>
               <th>{{ metricValueByModule.value.originalValue }}</th>
               <th>{{ metricValueByModule.value.referenceValue }}</th>
               <th>{{ metricValueByModule.value.loadValue }}</th>
               <th>{{ metricValueByModule.value.loadLevel }}</th>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ['metric'],
    data() {
        return {}
    },
    methods: {}
}
</script>

<style>
.container-vertical {
    display: flex;
    flex-direction: column;
    color: white
}
.container-horizontal {
  display: flex;
  flex-direction: row;
}
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f350;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}
</style>