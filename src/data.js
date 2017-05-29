const nodes = [
  {
    name: "app db 1"
  },
  {
    name: "app db 2",
    color: 'red'
  },
  {
    name: "api 1",
    color: 'red'
  },
  {
    name: "salesforce",
    color: 'red'
  },
  {
    name: "streamsets datacollector"
  },
  {
    name: "metrics collector"
  },
  {
    name: "datadog"
  },
  {
    name: "kinesis"
  },
];

const arrows = [
  {
    from: "app db 1",
    to: "streamsets datacollector"
  },
  {
    from: "app db 2",
    to: "streamsets datacollector"
  },
  {
    from: "api 1",
    to: "streamsets datacollector"
  },
  {
    from: "salesforce",
    to: "streamsets datacollector"
  },
  {
    from: "streamsets datacollector",
    to: "metrics collector"
  },
  {
    from: "metrics collector",
    to: "datadog"
  },
  {
    from: "streamsets datacollector",
    to: "kinesis"
  }
];
