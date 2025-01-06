﻿
  public class ListNode {
      public int val;
      public ListNode next;
      public ListNode(int val=0, ListNode next=null) {
          this.val = val;
          this.next = next;
      }
  }
 
public class Solution {
    public ListNode? MergeTwoLists(ListNode? list1, ListNode? list2)
    {
        if (list1 == null) return list1;
        if (list2 == null) return list2;
        ListNode? head = null, cur = null;
        while (list1 != null && list2 != null)
        {
            if (head == null)
            {
                if (list1.val <= list2.val)
                {
                    head = cur = list1; 
                    list1 = list1.next;
                }
                else
                {
                    head = cur = list2;
                    list2 = list2.next;
                }
            }
            else
            {
                if (list1.val <= list2.val)
                {
                    cur.next = list1;
                    cur = list1;
                    list1 = list1.next;
                }
                else
                {
                    cur.next = list2;
                    cur = list2;
                    list2 = list2.next;
                }
            }
        }
        if (list1 != null) cur.next = list1;
        if (list2 != null) cur.next = list2;
        return head;
    }
}