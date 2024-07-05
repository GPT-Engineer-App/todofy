import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const TaskItem = ({ task }) => {
  return (
    <div className="flex items-center justify-between p-2 border rounded">
      <div className="flex items-center space-x-2">
        <Checkbox />
        <div>
          <div className="font-semibold">{task.title}</div>
          <div className="text-sm text-muted-foreground">{task.dueDate}</div>
        </div>
      </div>
      <Badge variant="outline">{task.priority}</Badge>
    </div>
  );
};

export default TaskItem;