import { useMemo, useState } from "react";

const sections = [
  {
    id: "user-management",
    title: "User Management",
    icon: "👤",
    concept: `**User Management** is the foundation of Google Workspace administration. Every person in your organization needs a **user account with a license** to access services like Gmail, Drive, and Calendar.

**Licensing:**
- A **Flexible Plan** is month-to-month; you pay per active user and can add/remove anytime.
- An **Annual Plan** locks in a fixed number of licenses for a full year at a lower per-user cost.
- Each user needs their own license — multiple users cannot share one license.
- A single user can hold multiple licenses (for example, a Google Workspace edition plus Google Vault or Cloud Identity Premium).
- **Cloud Identity** has Free and Premium tiers. Cloud Identity users still need accounts, and paid features depend on assigned licenses.

**Adding Users:**
You can add users in six ways:
1. **Single user** — manually via Admin Console
2. **Multiple users** (up to 10) — manually in bulk
3. **Google Cloud Directory Sync (GCDS)** — syncs from LDAP/Active Directory
4. **Admin SDK Directory API** — programmatic approach
5. **Third-party tools**
6. **CSV upload** — up to **150,000 users** in one file. If you use the **New Licenses [Upload Only]** column to assign or update licenses, that CSV is limited to **200 users**.

**After Adding a User:**
- New services (Gmail, Drive, etc.) take up to **24 hours** to activate. Before that, users see a 'No access' page.
- Users created from a CSV file do **not** automatically receive a welcome email with credentials. Admins need to send credentials separately and can reset forgotten passwords in the Admin Console.

**Troubleshooting:**
- **Can't add a user?** → Check for available licenses and whether the username already exists.
- **CSV file too large?** → Split into multiple files. Keep normal CSV uploads under 150,000 users, and keep license-update CSV files under 200 users.
- **User limit exceeded?** → Verify you have sufficient licenses.

**Special Account Types:**
- **Unmanaged Account** — when the user you're trying to add already has a personal Google account with the same username. Use the **Transfer Tool for Unmanaged Users** to migrate them to your domain.
- **Visitor Account** — given to external collaborators who don't have Google accounts. Format: visitor@your-company.com
- **Shared Accounts** — risky: the account may hit thresholds, trigger security challenges, or get temporarily locked.

**Reserved Usernames:** Words like 'POSTMASTER' cannot be used as usernames.

**Educational Licenses:** To request additional licenses, contact Google Support with enrollment figures and usage data. This can take up to 2 weeks.`,
    qna: [
      { q: "What is a flexible plan?", a: "A billing plan where you pay month-to-month per active user, with the ability to add or remove users at any time." },
      { q: "What is an annual plan?", a: "A billing plan where you commit to a fixed number of user licenses for a full year, typically at a lower per-user cost." },
      { q: "What do you need in order to use Google services like Gmail, Calendar, Drive etc.?", a: "A License." },
      { q: "Can a user have multiple licenses?", a: "Yes — for example, a Google Workspace edition plus Cloud Identity Premium or Google Vault." },
      { q: "Can multiple users share one single Google Workspace license?", a: "No." },
      { q: "What are the different ways to add users in the organization?", a: "Single user, multiple users manually, Google Cloud Directory Sync, Admin SDK Directory API, a third-party tool, or a CSV file. CSV user creation supports up to 150,000 users; CSV license assignment is limited to 200 users per file." },
      { q: "When a new user is added, how many hours will it take to get new services like Gmail, Drive etc.?", a: "24 hours. Accessing before that shows a 'No access' page." },
      { q: "Unable to add a user — what should you check?", a: "A. Check for available licenses. B. Check if the name already exists." },
      { q: "Do users added from a CSV file receive a welcome email with credentials?", a: "No. If you create users from a CSV file, send their credentials separately. If the password is forgotten, reset it in the Admin Console." },
      { q: "What is the difference between normal subscriptions and Cloud Identity subscriptions?", a: "Google Workspace licenses give access to Workspace services. Cloud Identity has Free and Premium tiers for identity and device/security management, and paid capabilities depend on assigned licenses." },
      { q: "What is the CSV limit for bulk user creation and license assignment?", a: "CSV user creation supports up to 150,000 users. If assigning or updating licenses with the New Licenses [Upload Only] column, the CSV is limited to 200 users." },
      { q: "Where do you update the license information in the CSV file?", a: "Use the 'New Licenses [Upload Only]' column and enter the license SKU ID. A CSV file can include up to 200 users when this column is used." },
      { q: "What is an unmanaged account?", a: "An account where the user we try to add in the Admin Console already has a personal Google account with the same username." },
      { q: "What are visitor accounts?", a: "If users invite people outside the organization who don't have Google accounts to collaborate on Drive, they receive visitor accounts in the format visitor's_username@your-company.com." },
      { q: "How to add users via CSV?", a: "A. Download the template file. B. Enter user information. C. Save the file as CSV. D. Upload the file in the Admin Console." },
      { q: "Error: 'File is too large to upload' — what should you do?", a: "Split the data into separate CSV files. Keep normal user uploads under 150,000 users, and keep license-assignment uploads under 200 users." },
      { q: "Error: 'User limit exceeded' — what should you do?", a: "Check whether you have sufficient licenses before adding the users." },
      { q: "What is the Transfer Tool for Unmanaged Users?", a: "A tool to identify any unmanaged Google accounts and migrate those accounts to your domain." },
      { q: "Can 'POSTMASTER' be used as a username?", a: "No — it is a reserved word." },
      { q: "What happens if an account is shared by many users?", a: "A. The account may reach its threshold limit. B. Users may see a challenge or security question. C. The account may be temporarily locked." },
      { q: "How do you request additional educational subscription licenses?", a: "Contact Google support and provide detailed information such as student enrollment figures and current active usage. Requests may take up to 2 weeks." },
    ],
  },
  {
    id: "google-drive",
    title: "Google Drive",
    icon: "📁",
    concept: `**Google Drive** is the cloud storage backbone of Google Workspace, shared across Drive, Gmail, and Photos.

**Storage Types:**
- **Pooled Storage** — organization storage is shared across users and calculated from the licenses in the subscription. Google grants pooled storage in stages: you get part of it at purchase, and the full storage limit is granted after a **$30 USD payment** for the subscription. Manual payment can speed this up, but the storage increase can still take up to **72 hours**.

**Storage Limits by Edition:**
| Edition | Storage |
|---|---|
| Business Base (India only) | 20 GB × users |
| Business Starter | 30 GB × users (max 300 users) |
| Business Standard | 2 TB × users |
| Business Plus | 5 TB × users |
| Enterprise Starter | 1 TB × users |
| Enterprise Standard & Plus | 5 TB × users (can be increased via support) |
| Education Fundamentals & Standard | 100 TB total |
| Education Teaching & Learning | 100 GB × users |
| Education Plus | 20 GB × users |
| Essential Starter | 15 GB per user |
| Essentials (not for new customers) | 100 GB × users, max 2 TB |
| Enterprise Essentials | 1 TB × users |
| Enterprise Essentials Plus | 5 TB × users |
| Frontline Starter/Standard/Plus | 5 GB × users |
| Non-Profits | 100 TB total |

**Upload Limits:** A user can upload up to **750 GB per 24 hours**. A user's My Drive can contain up to **500 million items** they create, while a single folder can contain up to **500,000 items**.

**Sharing & Access Controls:**
- Default General access options: **Restricted** and **Your entire organization**.
- **Trust Rules** — control who can access sensitive Docs, Sheets & Slides.
- **Visitor Sharing** — share with non-Google accounts. They receive an email invite + PIN, valid for **7 days**; after that, a new invite must be sent.
- **Shared Drives** — team-owned storage for shared files. A shared drive can have up to **50,000 individual members** and **500,000 items**.
- To allow only certain OUs to share externally: turn off external sharing for the main OU, create a configuration group, add desired users, then enable external sharing for that group.
- To turn off external sharing org-wide: Admin Console > Apps > GWS > Drive & Docs > Sharing options > External sharing: OFF.

**Shared Drive Permissions (in order):** Manager → Content Manager → Contributor → Commenter → Viewer.

**Shared Drive Management:**
- If no manager exists, **Super Admins** can add managers.
- Deleted Shared Drives remain visible in Admin Console for **30 days**.
- Can be restored if deleted within the last **25 days** (Admin Console > Drive & Docs > Manage Shared Drives > Status: Deleted > Restore).
- If members are removed from a Shared Drive, they lose access to all files shared directly with them.

**Moving Files:**
- To move a file/folder from a Shared folder to My Drive: must have **Editor access** + permission to change permissions and share settings.

**Drive for Desktop:**
- Windows/Mac application that syncs Drive to File Explorer/Finder.
- **Streaming** — requires internet; files stay in the cloud.
- **Mirroring** — works offline; stores in both cloud and hard drive.
- Deleted files move to **Trash** and are available for **30 days**.

**Labels & Classification:**
- Labels can be applied via **3 ways**: Default classification, DLP, and AI classification.
- Labels **cannot** be applied to: folders, shortcuts, Shared Drives, or files from external domains.
- AI classification requires files to be in Shared Drives or owned by users with supported licenses.
- A user with **View-only** permission cannot apply classification labels.
- Once a label is published, you **cannot** change the field type.

**Other Features:**
- **eSignature**: Not supported on Business Starter.
- **Custom Templates in Docs**: Enable via Admin Console > Apps > GWS > Drive & Docs > Templates.
- **Transfer Ownership**: Admin Console > Apps > GWS > Drive & Docs > Transfer Ownership > specify From and To users.
- **Google Workspace Storage vs Cloud Storage**: GWS storage is for files users frequently access/edit via Drive/Gmail/Photos. Cloud Storage is for developer-built systems that access files indirectly.
- If a user was recently deleted, first restore the user from **Recently deleted users** when possible, then recover or transfer Drive data using the Admin Console recovery options.
- **Gems** (Gemini custom assistants) are stored in Google Drive — Drive sharing settings apply to Gems.`,
    qna: [
      { q: "GWS storage is shared between which services?", a: "Drive + Gmail + Photos." },
      { q: "What is pooled storage?", a: "Storage shared among all users across the organization." },
      { q: "How is pooled storage granted?", a: "Google grants pooled storage in stages. You get part of the storage at purchase, and the full storage limit is granted after a $30 USD subscription payment. Manual payment can speed this up, but it can still take up to 72 hours." },
      { q: "Storage limits — Business Starter?", a: "30 GB × number of users. Total: up to 300 users + archived users." },
      { q: "Storage limits — Business Standard?", a: "2 TB × number of users. Total: up to 300 users + archived users." },
      { q: "Storage limits — Business Plus?", a: "5 TB × number of users. Total: up to 300 users + archived users." },
      { q: "Storage limits — Enterprise Standard & Enterprise Plus?", a: "5 TB × number of users. (For 5+ users, storage can be increased by contacting Google support.)" },
      { q: "Storage limits — GWS for Education Fundamentals & Standard?", a: "100 TB for all users." },
      { q: "Storage limits — Frontline Starter / Standard / Plus?", a: "5 GB × number of users." },
      { q: "How much can a user upload to Google Drive in 24 hours?", a: "750 GB." },
      { q: "How many files/folders can My Drive contain?", a: "A user's My Drive can contain up to 500 million items they create. A single folder can contain up to 500,000 items." },
      { q: "How to access files offline?", a: "Enable offline access in Drive settings." },
      { q: "How to control who can access Google Docs, Sheets & Slides for sensitive data?", a: "Use Trust Rules." },
      { q: "Where are sharing settings for Google Gems managed?", a: "Gems are stored in Google Drive, so Drive sharing settings also apply to Gems." },
      { q: "How to allow only certain OUs to share externally?", a: "Create a configuration group in the Admin Console, add the desired users to it, turn off external sharing for the main OU, then turn it on for the newly created group." },
      { q: "How to share files/folders with people who don't have Google accounts?", a: "Use Visitor Sharing." },
      { q: "What is Visitor Sharing?", a: "Non-Google accounts receive an email invite and a PIN. Once verified, they can collaborate for 7 days. After 7 days, a new invite must be sent." },
      { q: "How to turn off external sharing for the organization?", a: "Admin Console > Apps > GWS > Drive & Docs > Sharing options > Sharing settings > External sharing: OFF > Save." },
      { q: "What are the default General access options in Google Drive?", a: "Restricted and Your entire organization." },
      { q: "If a target audience is removed from sharing settings, what happens to the files?", a: "Files remain shared with people who are not part of the target audience." },
      { q: "What are the conditions to move a file/folder from a Shared folder to My Drive?", a: "1. Must have Editor access. 2. Editors must have permission to change permissions and share settings." },
      { q: "How many individual members can a Shared Drive have?", a: "50,000." },
      { q: "If members are removed from a Shared Drive, what happens to files shared directly with them?", a: "They lose access." },
      { q: "If there is no manager or member in a Shared Drive, who can add managers?", a: "Super Administrators." },
      { q: "What are the access level permissions in a Shared Drive?", a: "Manager, Content Manager, Contributor, Commenter, and Viewer." },
      { q: "How many items can a Shared Drive contain?", a: "500,000 items, including files, folders, shortcuts, and trashed items." },
      { q: "How long do deleted Shared Drives remain visible in the Admin Console?", a: "30 days." },
      { q: "If a Shared Drive is deleted, can it be restored?", a: "Yes, if deleted within the last 25 days." },
      { q: "How to restore a deleted Shared Drive?", a: "Admin Console > Apps > Google Workspace > Drive & Docs > Manage Shared Drives > Filter: Status = Deleted > point to the Shared Drive > Restore." },
      { q: "What is Drive for Desktop?", a: "A software application for Windows and Mac that syncs cloud-based Google Drive files directly to the computer's file explorer or Finder." },
      { q: "What happens when you delete a file in Drive for Desktop?", a: "The file is deleted in the web interface and moves to Trash, where it is available for 30 days." },
      { q: "Business Starter subscription — can eSignature be turned on?", a: "No — Business Starter is not supported for eSignature." },
      { q: "How to enable custom templates in Docs?", a: "Admin Console > Apps > GWS > Drive & Docs > Templates > Template Gallery settings > Enable custom templates for your organization > Save." },
      { q: "How to transfer ownership of a user's files to another user?", a: "Admin Console > Apps > GWS > Drive & Docs > Transfer Ownership > specify 'From' and 'To' users." },
      { q: "What is the difference between Google Drive storage and Google Cloud Storage?", a: "Google Workspace storage is best for files users access, edit, or collaborate on frequently via Drive, Gmail, or Photos. Cloud Storage is best for files accessed indirectly through a website or developer-built system." },
      { q: "A user account was deleted 2 days ago and a file was also deleted — how to recover it?", a: "First restore the recently deleted user from Admin Console > Directory > Users > More options > Recently deleted users, then use Admin Console Drive recovery or transfer options as needed." },
      { q: "What is Streaming vs. Mirroring?", a: "Streaming requires an internet connection and stores content safely in the cloud. Mirroring does not require an internet connection and stores content in both the cloud and the hard drive." },
      { q: "Can a user with View-only permission apply classification labels to a file?", a: "No." },
      { q: "Can you change the field type after a label is published?", a: "No." },
      { q: "How many ways can labels be applied to files?", a: "3 ways: Default classification, DLP, and AI classification." },
      { q: "Where cannot classification labels be applied?", a: "Folders, shortcuts, Shared Drives, or files from external domains." },
      { q: "What are the conditions for AI classification labels?", a: "Files must be in Shared Drives or owned by users with licenses that support classification labels." },
    ],
  },
  {
    id: "domain-management",
    title: "Domain Management",
    icon: "🌐",
    concept: `**Domain Management** in Google Workspace is about setting up and maintaining the domains that form your organization's identity.

**Primary Domain:**
- The **primary domain** is the main identity of your organization — set during signup and cannot be deleted or easily changed.
- Never use a temporary domain during signup, because whatever you choose becomes the permanent identity.
- Domains containing the word **'gmail'** are rejected by Google to avoid confusion with Gmail branding.
- Custom service URLs can be created for the **primary domain and secondary domains**, but they must be configured separately for each domain.

**Domain Types:**
- **Primary Domain** — the permanent org identity
- **Secondary Domain** — additional domains added later
- **Alias Domain** — a user alias domain that adds no extra licensing cost

**Adding & Managing Domains:**
- Path: Admin Console > Account > Domains > Manage Domains
- You can add up to **200 domains at once**.
- Domains and OUs are **independent** — OUs control policies, not domains. To apply different policies to users from different domains, place them in different OUs.
- Google Workspace supports only **one org-wide logo** — you cannot have different logos per domain.

**Removing Domains:**
- You **cannot** remove the primary domain directly.
- Before removing a secondary domain, you must delete all **groups, email aliases, and users** under it.
- If removal options are not visible, required admin privileges may be missing.

**Allowlisted (Trusted) Domains:**
- A domain approved for external sharing only with specific trusted external organizations.
- If an allowlisted domain is removed, shared files are removed from 'Shared with me'. Changes take up to **24 hours** to apply.

**Merging Domains:**
- Requires **downtime** because domains and services may be temporarily unavailable.
- Before merging, old Workspace accounts must have subscriptions cancelled and accounts deleted.
- After merging, Play apps must be recovered by creating a new developer account and requesting an app transfer.
- Migration service supports: **Gmail, Calendar, and Drive** data.`,
    qna: [
      { q: "What is a primary domain in Google Workspace?", a: "The main identity of the organization. Once created, it cannot be deleted, and changes are only possible if certain conditions are met." },
      { q: "Why should we avoid using a temporary domain during signup?", a: "Because the primary domain becomes the permanent identity of the organization." },
      { q: "Do user alias domains incur additional user licensing costs?", a: "No." },
      { q: "Why does Google Workspace reject domains containing the word 'gmail'?", a: "To prevent confusion with Google-owned Gmail branding and services." },
      { q: "How do multiple domains relate to OUs?", a: "Domains and OUs are independent; OUs control policies, not domains." },
      { q: "How do I add domains to my Google Workspace or Cloud Identity account?", a: "Admin Console > Account > Domains > Manage Domains." },
      { q: "Why can't each domain have its own logo?", a: "Google Workspace supports only one organization-wide logo." },
      { q: "How many logos can be configured across multiple domains?", a: "Only one logo is supported for all domains." },
      { q: "How can different policies be applied to users from different domains?", a: "By placing users into separate Organizational Units (OUs)." },
      { q: "Why is downtime required during domain merging?", a: "Because domains and services may be temporarily unavailable during the process." },
      { q: "Can secondary domains have custom web addresses?", a: "Yes. Custom service URLs can be created for primary and secondary domains, but each domain needs its own custom URL configuration." },
      { q: "How do you recover Play apps after merging domains?", a: "Create a new developer account and request app transfer." },
      { q: "Which data can be migrated using the migration service?", a: "Gmail, Calendar, and Drive data." },
      { q: "What must be done to old Workspace accounts before merging?", a: "Cancel subscriptions and delete the accounts." },
      { q: "Can you remove a primary domain directly?", a: "No — only secondary or alias domains can be removed." },
      { q: "What must be deleted before removing a secondary domain?", a: "Groups, email aliases, and users." },
      { q: "Why might removal options not be visible?", a: "Required admin privileges may be missing." },
      { q: "What is an allowlisted (trusted) domain?", a: "A domain approved for external sharing only with trusted external organizations." },
      { q: "How many domains can be added at once?", a: "Up to 200 domains." },
      { q: "What happens to shared files after an allowlisted domain is removed? How long do changes take?", a: "Files are removed from 'Shared with me'. Changes may take up to 24 hours to apply." },
    ],
  },
  {
    id: "google-groups",
    title: "Google Groups",
    icon: "👥",
    concept: `**Google Groups for Business** is a core Google Workspace service that controls how groups work across the organization, available in all GWS editions including the legacy free G Suite edition.

**Default Roles (Every Group Has These 3):**
1. **Owner** — can delete the group, make others owners, change owner settings, and export messages via Google Takeout. These roles cannot be removed, but their permission sets can be modified.
2. **Manager** — manages group settings and members
3. **Member** — standard participant

**5 Functional Types of Google Groups:**
1. **Email List** — broadcast emails to all members
2. **Web Forum** — discussion forum style
3. **Q&A Forum** — question-and-answer format
4. **Collaborative Inbox** — lets teams manage shared email addresses (e.g., support@, info@) without sharing passwords. Members can assign conversations, mark progress, and track status. *Requires conversation history to be turned on first.*
5. **Access Group** — used to control resource access

**Special Group Types:**

**Dynamic Groups:**
- Manage membership automatically based on a **membership query**. To change members, change the query.
- Only **users** can be members — other groups cannot be added, and Dynamic Groups cannot be members of another group.
- Max **500 Dynamic Groups per customer** (can be increased by contacting support).
- Supported editions include **Frontline Standard/Plus, Enterprise Standard/Plus, Education Standard/Plus, Enterprise Essentials Plus, and Cloud Identity Premium**.
- Can only be created via **Admin Console or API** (not via the Google Groups UI).

**Security Groups:**
- Groups with a Security label, used to control access to organizational resources.
- This action is **permanent** — cannot be changed back to a regular group.
- **External (non-Google) accounts cannot be added** to a Security Group, because their security practices cannot be verified.

**Configuration Groups:**
- Can only be created via Admin Console or API (not in the Google Groups UI).

**Locked Groups:**
- Locked by admins to prevent sync issues with an external identity provider, or to increase security for sensitive groups.

**Key Rules & Limits:**
- A user can **own at most 1,500 groups**. No limit on how many regular groups they can create.
- Admins can control whether users can **add themselves** to a group, but **cannot prevent users from leaving** a group.
- Admin messages to moderated groups are **never moderated**, regardless of membership.
- If a Group Owner leaves the organization, the group continues normally; an admin can manage it or assign ownership.
- External members can be added if Groups for Business sharing settings allow it.
- When an activity limit is reached, activity is restricted, typically for about **1 hour but up to 24 hours**.
- There is a UI limit on members added via the Groups UI; admins can add more via Admin Console or Admin SDK Directory API.

**Key Differences:**
- **Google Groups (Groups for Business)**: Have their own group email address; messages can be sent directly to the group.
- **Google Contacts Groups**: Simply lists of email addresses, no dedicated group email.

**How to Set Up:**
- Turn on: Admin Console > Apps > Google Workspace > Groups for Business > Turn ON.
- Restrict user group creation: Admin Console > Apps > GWS > Groups for Business > Sharing settings > Disable user group creation.
- When a user creates a group, they automatically become the **Group Owner** (they can edit this later).`,
    qna: [
      { q: "What is Google Groups for Business?", a: "A core service in the Admin Console that controls how an organization's groups can be used in the Google Groups app at groups.google.com." },
      { q: "Which GWS editions have Google Groups for Business?", a: "All editions, including the legacy free G Suite edition." },
      { q: "What are the 3 default roles in every Google Group?", a: "Owner, Manager, and Member. These default roles cannot be removed, but their permission sets can be modified." },
      { q: "What can a Group Owner do that others cannot?", a: "Delete a group, make another member an owner, change another owner's settings, and export group messages using Google Takeout." },
      { q: "What are the 5 functional types of Google Groups?", a: "Email List, Web Forum, Q&A Forum, Collaborative Inbox, and Access Group." },
      { q: "What is a Collaborative Inbox?", a: "A feature that lets teams manage shared email addresses (e.g. support@, info@) without sharing passwords. Members can assign conversations, mark progress, and track status." },
      { q: "What must be enabled before turning on Collaborative Inbox features?", a: "Conversation history must be turned on." },
      { q: "What is a Dynamic Group?", a: "A group that manages membership automatically based on a membership query. Members are added or removed automatically; to change members, you change the query." },
      { q: "What are the restrictions of Dynamic Groups?", a: "Only users can be members — groups cannot be added. Dynamic groups also cannot be members of another group." },
      { q: "How many Dynamic Groups can be created per customer?", a: "Up to 500. This limit can be increased on a case-by-case basis by contacting Google Workspace support." },
      { q: "Which GWS editions support Dynamic Groups?", a: "Frontline Standard/Plus, Enterprise Standard/Plus, Education Standard/Plus, Enterprise Essentials Plus, and Cloud Identity Premium." },
      { q: "Where can Dynamic Groups and Configuration Groups be created?", a: "Only in the Admin Console or via the API (not in the Google Groups UI)." },
      { q: "What is a Security Group?", a: "A group with the Security label, used to control access to organizational resources. This action is permanent — it cannot be changed back to a regular group." },
      { q: "Can external (non-Google) accounts be added to a Security Group?", a: "No — the security practices of external providers cannot be verified." },
      { q: "Is there a limit on the number of groups a user can create?", a: "No limit for regular types, but a user can own at most 1,500 groups. Dynamic groups are capped at 500 per customer." },
      { q: "Can an admin prevent users from leaving a group?", a: "No. Admins can control whether users can add themselves to a group but cannot prevent users from leaving." },
      { q: "Are messages sent by admins to a moderated group also moderated?", a: "No — admin messages are never moderated, regardless of membership." },
      { q: "If a Group Owner leaves the organization, what happens to the group?", a: "The group continues normally. An admin can manage the group or assign ownership to another user." },
      { q: "Can external members be added to a Google Group?", a: "Yes, through the Admin Console if the Groups for Business sharing settings allow it." },
      { q: "What is the difference between Google Groups and Google Contacts groups?", a: "Contact groups are simply lists of email addresses. Groups for Business have their own group email address that anyone with permission can send messages to directly." },
      { q: "What happens when you reach a Groups activity limit?", a: "Activity is temporarily restricted, typically for about an hour but potentially up to 24 hours." },
      { q: "What is a Locked Group?", a: "A Google Group locked by administrators to prevent it from getting out of sync with an external identity provider or to increase security for sensitive groups." },
      { q: "How to turn on Groups for Business?", a: "Admin Console > Apps > Google Workspace > Groups for Business > Turn ON." },
      { q: "How to restrict users from creating their own groups?", a: "Admin Console > Apps > GWS > Groups for Business > Sharing settings > Disable user group creation." },
      { q: "If a user creates a group, what role are they automatically assigned?", a: "Group Owner. However, they can edit the group to remove their ownership at any time." },
    ],
  },
  {
    id: "google-calendar",
    title: "Google Calendar",
    icon: "📅",
    concept: `**Google Calendar** in Google Workspace offers powerful sharing controls, resource booking, and integration with external calendar systems.

**Primary Calendar Sharing Options:**

*Internal sharing:*
- No sharing
- Only free/busy information (hide event details)
- Share all information

*External sharing:*
- Only free/busy (shows when booked or free but not event details)
- Share all information but outsiders cannot change calendars

*Setting location:* Admin Console > Apps > Google Workspace > Calendar > Sharing settings

**Admin Override:** Super Admins and admins with the **Manage Calendars** permission can see **all event details** in everyone's calendars, regardless of sharing settings.

**Calendar Resources:**
Resources are shared items users can reserve — conference rooms, company cars, bicycles, etc.
- Setup: Admin Console > Directory > Buildings and Resources
- Available within **minutes** but may take up to **24 hours** to propagate.
- Up to **10,000 buildings** per company/domain.
- Up to **100 resource features** per domain (features can only be added via Admin Console or API — not CSV upload).

**Two Types of Calendar Resources:**
1. **Conference Room** — for meetings, conferences, phone rooms
2. **Other** — e.g., bicycle, company car

**Smart Room Suggestions:**
Calendar checks the work location of all invited guests and suggests the best rooms based on building/floor, booking history, AV equipment, and capacity.

**Calendar Interop:**
- Allows **Microsoft Exchange and Google Calendar** to work together — users in both systems can share availability and view each other's schedules.
- Supported Exchange versions: **Exchange 2016 or newer**, or Exchange Online (Microsoft 365), on computer, mobile, and web Outlook clients.

**Working Location Feature:**
- Lets users set and share where they work from.
- Enable: Admin Console > Apps > GWS > Calendar > Sharing settings > Working Location.
- Can be applied to specific OUs.

**Usage Limits:**
- If a user hits a usage limit, activity is temporarily restricted for a few hours.
- Stricter limits apply to: trial accounts, accounts within 60 days of initial payment, legacy free G Suite users, and Google for Nonprofits customers.

**Secondary Calendars:**
- Any calendar a user creates, or a group calendar shared with them.
- Each secondary calendar has a **single dedicated owner** (the creator).
- Admins can transfer ownership via Admin Console.`,
    qna: [
      { q: "What are the default Internal sharing options for primary calendars?", a: "No sharing; Only free/busy information (hide event details); Share all information." },
      { q: "What are the External sharing options for primary calendars?", a: "Only free/busy information (shows when a calendar is booked or free but not event details); Share all information but outsiders cannot change calendars." },
      { q: "Where do you change Calendar sharing settings in the Admin Console?", a: "Admin Console > Apps > Google Workspace > Calendar > Sharing settings." },
      { q: "Can Super Admins see all event details regardless of sharing settings?", a: "Yes. Super Admins and admins with the Manage Calendars permission can see all event details in everyone's calendars." },
      { q: "What are Calendar Resources and how are they set up?", a: "Resources are shared items users can reserve (e.g. conference rooms, company cars). Set up in Admin Console > Directory > Buildings and Resources. They become available within minutes, but may take up to 24 hours." },
      { q: "How many buildings can be created per domain for Calendar Resources?", a: "Up to 10,000 buildings per company or domain." },
      { q: "How many resource features can be created per domain?", a: "Up to 100 features per domain. Features can only be added via the Admin Console or API — not via CSV upload." },
      { q: "What are the two types of Calendar Resources?", a: "Conference room (for meetings or conferences, including small phone rooms) and Other (e.g. bicycle or company car)." },
      { q: "What is Calendar Interop?", a: "A feature that allows Microsoft Exchange and Google Calendar to work together so users in both systems can share availability and view each other's schedules." },
      { q: "Which versions of Exchange are supported for Calendar Interop?", a: "Microsoft Exchange 2016 or newer, or Exchange Online (Microsoft 365), across computer, mobile, and web Outlook clients." },
      { q: "What is the Working Location feature and how is it enabled?", a: "Working Location lets users set and share where they are working from. Enabled in Admin Console > Apps > GWS > Calendar > Sharing settings > Working Location. Can be applied to specific OUs." },
      { q: "How does Google Calendar suggest rooms automatically?", a: "Calendar checks the work location of all invited guests and suggests the best rooms, taking into account building/floor, booking history, AV equipment, and capacity." },
      { q: "What happens if a user hits a Google Calendar use limit?", a: "Activity is temporarily restricted and the user cannot repeat that action for a few hours. Stricter limits apply to trial accounts, accounts within 60 days of initial payment, legacy free G Suite users, and Google for Nonprofits customers." },
      { q: "What is a secondary calendar and who owns it?", a: "Any calendar a user creates or a group calendar shared with them. Each secondary calendar has a single dedicated owner — the user who created it. Admins can transfer ownership in the Admin Console." },
    ],
  },
  {
    id: "gmail",
    title: "Gmail",
    icon: "📧",
    concept: `**Gmail** in Google Workspace includes powerful routing, security, compliance, and productivity features for administrators to manage.

**Mail Merge:**
- Sends personalized emails using placeholders like @firstname.
- Up to **1,500 mail-merge recipients per day**. Each recipient counts toward Gmail sending limits.

**Email Delivery & Routing:**
- **Split Delivery** — sends mail to *either* Gmail or another mail server.
- **Dual Delivery** — sends a copy to *both* servers. Gmail is recommended as the primary server.
- If MX records were updated but emails still don't arrive, check whether records were updated with the **correct DNS provider**.
- **DNS propagation** typically takes **1–72 hours**.

**Two Main Routing Settings:**
1. **Default Routing** — handles normal mail flow
2. **Routing** — for special mail rules

**Email Security — SPF, DKIM, DMARC:**
- All three protect against **email spoofing and phishing**.
- All senders to personal Gmail accounts must use **SPF or DKIM**. Bulk senders who send more than **5,000 messages per day** to personal Gmail accounts must use **SPF, DKIM, and DMARC**.

**Gmail Delegation:**
- Lets another user read and reply to your emails.
- Different from **'Send mail as'**, which allows sending from another address only. Delegation gives **full mailbox access**.

**Admin Capabilities:**
- **Content Compliance Rules** — filter emails based on content or attachments.
- **Spam Management** — create spam filters, approved sender lists, and quarantine rules.
- **Organization-wide Signatures** — admins can set email signatures for all users.
- **Email Log Search (ELS)** — a tool to track and troubleshoot email delivery issues.
- **Gmail Smart Features** — provide suggestions and automatic actions, such as creating Calendar events from emails.

**Groups in Gmail Context:**
- **Mailing Group** — sends emails to all members
- **Security Group** — controls resource access
- **Dynamic Group** — adds members automatically based on a query; cannot be added to another group`,
    qna: [
      { q: "What is Mail Merge in Gmail?", a: "Mail Merge lets you send personalized emails to many recipients at once, using placeholders like @firstname." },
      { q: "What are the sending limits for Mail Merge?", a: "Up to 1,500 mail-merge recipients per day. Each recipient counts toward Gmail sending limits." },
      { q: "A user updated MX records but still cannot receive emails — what could be the issue?", a: "The MX records may have been updated with the wrong DNS provider." },
      { q: "How long does DNS propagation take?", a: "Usually 1–72 hours." },
      { q: "What is the difference between Split Delivery and Dual Delivery?", a: "Split Delivery sends mail to either Gmail or another server. Dual Delivery sends a copy to both servers." },
      { q: "Which server is recommended as primary in Dual Delivery?", a: "Gmail is recommended as the primary server." },
      { q: "What is Gmail Delegation?", a: "Gmail Delegation lets another user read and reply to your emails." },
      { q: "What is the difference between 'Send mail as' and 'Mail Delegation'?", a: "'Send mail as' allows sending emails from another address. Delegation gives full mailbox access." },
      { q: "What is the difference between Mailing Group, Security Group, and Dynamic Group?", a: "Mailing Group sends emails to all members. Security Group controls resource access. Dynamic Group adds members automatically based on a query." },
      { q: "Can a Dynamic Group be added to another group?", a: "No — Dynamic Groups cannot be members of other groups." },
      { q: "What is the purpose of SPF, DKIM, and DMARC?", a: "They protect emails from spoofing and phishing attacks." },
      { q: "What are Google's email authentication requirements for senders to Gmail?", a: "All senders to personal Gmail accounts must use SPF or DKIM. Bulk senders over 5,000 messages per day must use SPF, DKIM, and DMARC." },
      { q: "What are the two main routing settings in Gmail?", a: "Default Routing (handles normal mail flow) and Routing (for special mail rules)." },
      { q: "What is a Content Compliance rule in Gmail?", a: "A rule that filters emails based on content or attachments." },
      { q: "Can admins set email signatures for all users?", a: "Yes — admins can add organization-wide signatures." },
      { q: "What are Gmail Smart Features?", a: "Features that provide suggestions and automatic actions, such as creating Calendar events from emails." },
      { q: "What is Email Log Search (ELS)?", a: "A tool that helps admins track and troubleshoot email delivery issues." },
      { q: "How can admins manage spam settings in Gmail?", a: "Admins can create spam filters, approved sender lists, and quarantine rules." },
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: "🔒",
    concept: `**Security** in Google Workspace is a multi-layered system of authentication, access control, data protection, and activity monitoring.

**2-Step Verification (2SV):**
- Adds extra security: password + additional verification method.
- Enable: Admin Console > Security > Authentication > 2-Step Verification.
- **Methods:** Security keys, Google prompts, Authenticator app, backup codes.
- If users don't comply with 2SV policy, they may get **locked out**.
- Recovery: admins can disable the login challenge or provide backup codes.

**Passkeys:**
- Allow passwordless sign-in using fingerprint, face unlock, or screen lock.
- More secure than passwords — protect against phishing.

**Advanced Protection Program (APP):**
- Provides strongest security using security keys or passkeys.
- Only **Super Admins or Security Admins** can enable it.

**Login Challenges:**
- Triggered when Google detects suspicious login activity.
- Admins can temporarily disable a login challenge for **10 minutes**.

**Password Policies:**
- Managed at: Admin Console > Security > Authentication > Password Management.
- Admins can: reset passwords, force password changes, and revoke app passwords.

**Multi-Party Approval (MPA):**
- Requires another admin to approve sensitive changes.
- Configured at: Admin Console > Security > Authentication > Multi-party approval settings.

**Single Sign-On (SSO):**
- Lets users access multiple apps with one login.
- **Protocols supported:** SAML and OIDC.
- SAML configuration requires: IDP URL, sign-in URL, sign-out URL, verification certificate.

**API Controls:**
- Manage which third-party apps can access Google Workspace data.
- Location: Admin Console > Security > Access and Data Control > API Controls.
- API Controls can **override Marketplace allowlist settings** — can block app access even if the app is allowlisted.

**Data Loss Prevention (DLP):**
- Protects sensitive data from being shared outside the organization.
- Common DLP outcomes include **audit/alert, warn users, or block sharing**. Gmail-related compliance/security rules can also quarantine messages.
- Supported editions include **Frontline Standard/Plus, Enterprise Standard/Plus, Education Fundamentals/Standard/Plus, Teaching and Learning Upgrade, Enterprise Essentials Plus**, and some Cloud Identity Premium combinations with Workspace licenses.
- Location: Admin Console > Security > Access and Data Control > Data Protection.
- Rules can be tested in **test mode** before activation.

**Activity Rules:**
- Automatically take action when specific events occur.
- Example: force a password reset after many failed login attempts.
- Max **100 activity rules**.
- Location: Admin Console > Rules or Security Center.
- Use **log event data** (Gmail, device logs, etc.) as data sources.
- Can be tested in **Monitor Mode** — tests without real actions.

**Reporting Rules:**
- Send alerts for specific activities. Do NOT take automatic actions (unlike Activity Rules).
- Supported editions: Enterprise, Education, Frontline, and Cloud Identity Premium.

**Security Keys:**
- Provide stronger protection against phishing and unauthorized access.

**Recovery Options for Users:**
- Recovery phone number and recovery email address.

**Viewing DLP & Rule Events:**
- Admin Console > Reporting > Audit and Investigation > Rule log events.`,
    qna: [
      { q: "What is 2-Step Verification (2SV)?", a: "2SV adds extra security by requiring a password plus an additional verification method." },
      { q: "How can admins enable 2SV?", a: "Admin Console > Security > Authentication > 2-Step Verification." },
      { q: "What methods can users use for 2SV?", a: "Security keys, Google prompts, Authenticator app, and backup codes." },
      { q: "What happens if users don't follow a required 2SV policy?", a: "Users may get locked out of their accounts." },
      { q: "How can users recover accounts if locked out of 2SV?", a: "Admins can disable the login challenge or provide backup codes." },
      { q: "What recovery options can users add to accounts?", a: "Recovery phone number and recovery email address." },
      { q: "What is the Advanced Protection Program (APP)?", a: "APP provides stronger security using security keys or passkeys." },
      { q: "Who can enable the Advanced Protection Program?", a: "Super Admins or Security Admins." },
      { q: "What is a Login Challenge?", a: "An extra verification step triggered when Google detects suspicious login activity." },
      { q: "Can admins temporarily disable a login challenge?", a: "Yes — admins can disable it for 10 minutes." },
      { q: "What is a Passkey?", a: "A passkey allows passwordless sign-in using fingerprint, face unlock, or screen lock." },
      { q: "What is the advantage of passkeys?", a: "They are more secure and protect against phishing attacks." },
      { q: "Where do admins manage password policies?", a: "Admin Console > Security > Authentication > Password Management." },
      { q: "What password actions can admins perform?", a: "Reset passwords, force password changes, and revoke app passwords." },
      { q: "What is Multi-Party Approval (MPA)?", a: "MPA requires another admin to approve sensitive changes." },
      { q: "Where is Multi-Party Approval configured?", a: "Admin Console > Security > Authentication > Multi-party approval settings." },
      { q: "What is Single Sign-On (SSO)?", a: "SSO lets users access multiple apps using one login." },
      { q: "Which SSO protocols does Google Workspace support?", a: "SAML and OIDC." },
      { q: "What details are needed to configure SAML SSO?", a: "IDP URL, sign-in URL, sign-out URL, and verification certificate." },
      { q: "What are API Controls?", a: "API Controls manage which third-party apps can access Google Workspace data." },
      { q: "Where are API Controls managed?", a: "Admin Console > Security > Access and Data Control > API Controls." },
      { q: "What is DLP in Google Workspace?", a: "DLP protects sensitive data from being shared outside the organization." },
      { q: "What actions can DLP rules take?", a: "Common DLP outcomes include audit or alert, warn users, or block sharing. Gmail-related compliance/security rules can also quarantine messages." },
      { q: "Which editions support DLP?", a: "Supported editions include Frontline Standard/Plus, Enterprise Standard/Plus, Education Fundamentals/Standard/Plus, Teaching and Learning Upgrade, Enterprise Essentials Plus, and some Cloud Identity Premium combinations with Workspace licenses." },
      { q: "Where are DLP rules created?", a: "Admin Console > Security > Access and Data Control > Data Protection." },
      { q: "Can DLP rules be tested before activation?", a: "Yes — rules can run in test mode before becoming active." },
      { q: "What is an Activity Rule?", a: "An Activity Rule automatically takes action when specific events occur." },
      { q: "Give an example of an Activity Rule.", a: "Force a password reset after many failed login attempts." },
      { q: "How many activity rules can be created?", a: "Up to 100 activity rules." },
      { q: "Where are Activity Rules created?", a: "Admin Console > Rules or Security Center." },
      { q: "What data sources can Activity Rules use?", a: "Log event data such as Gmail or device logs." },
      { q: "What is a Reporting Rule?", a: "A Reporting Rule sends alerts for specific activities or events." },
      { q: "How is a Reporting Rule different from an Activity Rule?", a: "Reporting Rules send alerts only; Activity Rules can also take automatic actions." },
      { q: "Which editions support Reporting Rules?", a: "Enterprise, Education, Frontline, and Cloud Identity Premium editions." },
      { q: "Where can admins view DLP and rule events?", a: "Admin Console > Reporting > Audit and Investigation > Rule log events." },
      { q: "Can Activity Rules be tested before activation?", a: "Yes — they can run in Monitor Mode." },
      { q: "What is Monitor Mode in Activity Rules?", a: "It tests rules without performing real actions." },
      { q: "What happens when API Controls override Marketplace allowlist settings?", a: "API Controls can still block app access even if the app is allowlisted." },
      { q: "What is the purpose of security keys in Google Workspace?", a: "Security keys provide stronger protection against phishing and unauthorized access." },
    ],
  },
  {
    id: "gemini-logs",
    title: "Gemini & Log Events",
    icon: "✨",
    concept: `**Gemini** is Google's AI assistant deeply integrated into Google Workspace apps, and **Log Events** provide visibility into all admin and user activities.

**Gemini in Google Workspace:**
- Google Workspace plans now include access to Gemini features, but exact capabilities depend on subscription, admin settings, and feature availability.
- **Three main parts:** Gemini in Workspace apps, Gemini App, and NotebookLM.
- Managed at: Admin Console > Generative AI > Gemini for Workspace.
- Can be controlled per OU or group.
- **Gemini side panel access:** Available in supported Workspace services and editions, controlled by admins from Gemini for Workspace settings.

**What Gemini Can Do Per App:**
| App | Capability |
|---|---|
| Gmail | Draft emails, summarize threads |
| Google Docs | Create, summarize, improve documents |
| Google Sheets | Create formulas, tables, data analysis |
| Google Slides | Create slides, generate images |
| Google Meet | Take meeting notes, summarize meetings |

**Gemini App Features:**
- **Gems** — custom AI assistants for specific tasks. Stored in Google Drive; Drive sharing settings apply.
- **Deep Research** — detailed AI-based research.
- **'Ask Gemini' in Meet** — provides private meeting summaries during meetings.
- Access at: gemini.google.com or the Gemini mobile app.
- Admins can disable access to the Gemini app.

**NotebookLM:**
- An AI research assistant for uploaded documents.
- Enable: Admin Console > Apps > Additional Google Services.

**Workspace Intelligence:**
- Helps Gemini understand data from Gmail, Drive, Calendar, and other apps.
- If Gmail is disabled in Workspace Intelligence, some Gmail AI features may stop working.

**Workspace Studio:**
- Creates AI automation workflows without coding.
- Available in AI Expanded Access.

**Privacy:**
- Google does **NOT** use Workspace data to train Gemini AI models.

**AI Access Tiers:**
1. **Standard AI** — base Gemini features
2. **AI Expanded Access** — higher AI limits + advanced features (image generation, video generation, Workspace Studio)
3. **AI Ultra Access** — highest AI capabilities

**AI Expanded Access:**
- Available for eligible Business and Enterprise plans.
- Users see an **'Expanded' badge**.
- Purchase and self-service availability can vary by country, account type, and Workspace plan.
- If a user hits their AI usage limit, they may be switched to a lower-speed model or must wait for reset.

**Client-Side Encryption (CSE):**
- Encrypts data so even Google and Gemini cannot access it.

---

**Log Events & Audit:**

**Where to Access:** Admin Console > Reporting > Audit and Investigation

**Types of Log Events:**
| Log | Tracks |
|---|---|
| Admin Audit | Admin actions in the Admin Console |
| Login Audit | Login attempts and sign-in activities |
| Drive Log Events | File sharing, permissions, deletions |
| User Log Events | Password changes, recovery detail updates |
| SAML Audit | SAML app sign-ins |
| OAuth Token Audit | Third-party app access to Google data |

**Retention:** From **1 day up to 3,650 days**, depending on log type and edition.
**Export:** Can be exported to tools like **Splunk or BigQuery**.

**Data Tools:**
- **Data Import Tool** — helps admins migrate email data; only admins can use it.
- Bulk add users via CSV: Admin Console > Directory > Users > Upload CSV file.
- **Data Export:** Admin Console > Data > Data Import & Export > Data Export.
- **Google Takeout** — users can export their own data.
- **File formats used in exports:** ZIP, CSV, MBOX, ICS.

**Admin Roles:**
- **Super Admin** — full control over all GWS settings and users.
- **Pre-built roles:** User Management Admin, Groups Admin, Help Desk Admin.
- **Help Desk Admin** — allows password reset and basic user support.
- **Create custom role:** Admin Console > Account > Admin Roles > Create New Role.
- **Assign role:** Open the role > assign users from Admin Roles section.`,
    qna: [
      { q: "What is Gemini in Google Workspace?", a: "Gemini is Google's AI assistant integrated into Workspace apps." },
      { q: "Is Gemini included in Google Workspace plans?", a: "Google Workspace plans now include access to Gemini features, but exact capabilities depend on subscription, admin settings, and feature availability." },
      { q: "What are the main parts of Gemini?", a: "Gemini in Workspace apps, Gemini App, and NotebookLM." },
      { q: "What can Gemini do in Gmail?", a: "Draft emails and summarize email threads." },
      { q: "What can Gemini do in Google Docs?", a: "Create, summarize, and improve documents." },
      { q: "What can Gemini do in Google Sheets?", a: "Create formulas, tables, and data analysis." },
      { q: "What can Gemini do in Google Slides?", a: "Create slides and generate images." },
      { q: "What can Gemini do in Google Meet?", a: "Take meeting notes and summarize meetings." },
      { q: "What is NotebookLM?", a: "An AI research assistant for uploaded documents." },
      { q: "What is Workspace Intelligence?", a: "Helps Gemini understand data from Gmail, Drive, Calendar, and other Workspace apps." },
      { q: "How do admins manage Gemini features?", a: "Admin Console > Generative AI > Gemini for Workspace." },
      { q: "What is Workspace Studio?", a: "Workspace Studio creates AI workflows without coding." },
      { q: "Can admins turn off the Gemini app?", a: "Yes — admins can disable access to the Gemini app." },
      { q: "Does Google use Workspace data to train Gemini AI?", a: "No — Workspace data is not used to train AI models." },
      { q: "What happens if Gmail is disabled in Workspace Intelligence?", a: "Some Gmail AI features may stop working." },
      { q: "How is Gemini side panel access controlled?", a: "Admins manage Gemini features and side panel access from Admin Console > Generative AI > Gemini for Workspace. Availability depends on the Workspace edition." },
      { q: "What is a Gem in the Gemini app?", a: "A Gem is a custom AI assistant for specific tasks." },
      { q: "How can admins review Gemini usage?", a: "Through Admin Console reports and the Reports API." },
      { q: "What is Client-Side Encryption (CSE)?", a: "CSE encrypts data so even Google and Gemini cannot access it." },
      { q: "How do admins enable NotebookLM?", a: "Admin Console > Apps > Additional Google Services." },
      { q: "What is Deep Research in Gemini?", a: "It helps users perform detailed AI-based research." },
      { q: "Where can users access the Gemini app?", a: "At gemini.google.com or the Gemini mobile app." },
      { q: "Can Gemini features be controlled for specific OUs?", a: "Yes — admins can enable or disable features for specific OUs or groups." },
      { q: "What is 'Ask Gemini' in Google Meet?", a: "It provides private meeting summaries to users during meetings." },
      { q: "What is the Data Import tool in Google Workspace?", a: "The Data Import tool helps admins migrate email data from one account to another." },
      { q: "Who can use the Data Import tool?", a: "Only administrators." },
      { q: "How do you export all organization data?", a: "Admin Console > Data > Data Import & Export > Data Export." },
      { q: "How can users export their own data?", a: "Users can use Google Takeout." },
      { q: "What file formats are used in Google data exports?", a: "ZIP, CSV, MBOX, and ICS." },
      { q: "What are Log Events in Google Workspace?", a: "Log Events record user and admin activities." },
      { q: "Where are Log Events accessed?", a: "Admin Console > Reporting > Audit and Investigation." },
      { q: "What does the Admin Audit log track?", a: "Admin actions in the Admin Console." },
      { q: "What does the Login Audit log track?", a: "Login attempts and sign-in activities." },
      { q: "What does the Drive Log Events track?", a: "File sharing, permissions, and deletions." },
      { q: "What does the User Log Events track?", a: "Password changes and recovery detail updates." },
      { q: "What does the SAML Audit log track?", a: "SAML app sign-ins." },
      { q: "What does the OAuth Token Audit log track?", a: "Third-party app access to Google data." },
      { q: "How long can log events be retained?", a: "From 1 day up to 3,650 days, depending on the log type and edition." },
      { q: "Can log events be exported to external tools?", a: "Yes — they can be exported to tools like Splunk or BigQuery." },
      { q: "What is the Super Admin role?", a: "Super Admin has full control over Google Workspace settings and users." },
      { q: "Give examples of pre-built admin roles.", a: "User Management Admin, Groups Admin, and Help Desk Admin." },
      { q: "How do you create a custom admin role?", a: "Admin Console > Account > Admin Roles > Create New Role." },
      { q: "How do you assign an admin role to a user?", a: "Open the role and assign users from the Admin Roles section." },
      { q: "What is the Help Desk Admin role?", a: "It allows password reset and basic user support tasks." },
    ],
  },
  {
    id: "ai-expanded",
    title: "AI Expanded Access",
    icon: "🤖",
    concept: `**AI Expanded Access** is a Google Workspace add-on that provides higher limits and advanced AI capabilities beyond the standard Gemini features.

**What It Is:**
- An add-on for eligible **Business and Enterprise** plans.
- Gives access to advanced image generation, video generation, **Workspace Studio** (AI workflows without coding), and higher Gemini usage limits.

**Three AI Access Tiers:**
1. **Standard AI** — base Gemini features included with all plans
2. **AI Expanded Access** — higher limits + advanced features
3. **AI Ultra Access** — the highest AI capabilities available

**Who Can Purchase:**
- Admins can assign it through the Admin Console.
- Purchase and self-service availability can vary by country, account type, and Workspace plan.

**User Experience:**
- Users with AI Expanded Access see an **'Expanded' badge**.
- If a user hits their AI usage limit, they may be switched to a **lower-speed model** or must wait for limits to reset.

**Workspace Studio:**
- Helps users create AI automation workflows without needing to write code.
- Available as part of AI Expanded Access.`,
    qna: [
      { q: "What is the AI Expanded Access add-on in Google Workspace?", a: "AI Expanded Access provides higher access to advanced AI features in Google Workspace." },
      { q: "Which Google Workspace editions can purchase AI Expanded Access?", a: "Eligible Business and Enterprise plans." },
      { q: "What advanced AI features are included in AI Expanded Access?", a: "Advanced image generation, video generation, Workspace Studio, and higher Gemini limits." },
      { q: "How does an admin assign AI Expanded Access to users?", a: "Admins assign it through the Admin Console." },
      { q: "What badge do users see with AI Expanded Access?", a: "Users see an 'Expanded' badge." },
      { q: "Can users purchase AI Expanded Access themselves?", a: "Self-service purchase availability can vary by country, account type, and Workspace plan. Admin assignment through the Admin Console is the safest answer for managed domains." },
      { q: "What are the three Gemini AI access tiers?", a: "Standard AI, AI Expanded Access, and AI Ultra Access." },
      { q: "What happens if a user reaches their AI usage limit?", a: "Users may be switched to a lower-speed model or must wait for limits to reset." },
      { q: "What is the difference between AI Expanded Access and AI Ultra Access?", a: "Expanded Access gives higher AI limits; Ultra Access provides the highest AI capabilities." },
      { q: "What is Workspace Studio in AI Expanded Access?", a: "Workspace Studio helps users create AI automation workflows." },
    ],
  },
  {
    id: "google-vault",
    title: "Google Vault",
    icon: "🗄️",
    concept: `**Google Vault** is a Google Workspace tool for **data retention, legal holds, search, and eDiscovery** of organizational data including emails, chats, and files.

**Who Can Use It:**
- Only **admins with Vault permissions** can access and use Google Vault. Normal users cannot.

**Key Capabilities:**
- **Search** — find specific emails, chats, or files across the organization
- **Export** — export data for legal or compliance purposes
- **Retain** — keep data for a specified period even after users delete it

**Retention Rules:**
- Define how long data (emails, chats, etc.) is kept before it is permanently deleted.

**Holds:**
- A **hold** prevents data from being deleted, even if users remove it from their own accounts.
- Critical for legal proceedings and investigations.`,
    qna: [
      { q: "What is Google Vault?", a: "A Google Workspace tool used for data retention, search, and eDiscovery of emails, chats, and files." },
      { q: "What can admins do using Google Vault?", a: "Search, export, and retain user data for legal or security purposes." },
      { q: "What is a retention rule in Google Vault?", a: "A rule that decides how long data (e.g. emails or chats) is kept before deletion." },
      { q: "What is a hold in Google Vault?", a: "A hold prevents data from being deleted, even if users remove it from their accounts." },
      { q: "Can normal users access Google Vault?", a: "No — only admins with Vault permissions can access and use Google Vault." },
    ],
  },
  {
    id: "google-sites",
    title: "Google Sites",
    icon: "🌍",
    concept: `**Google Sites** is a core Google Workspace service that lets people in an organization build beautiful, interactive websites quickly, following Google Drive privacy policies.

**Default State:** Turned **on** by default.

**Turning On/Off Site Creation:**
- Admin Console > Apps > GWS > Sites > New Sites > Site creation and editing.
- Both "Users can edit sites" and "Allow users to create new sites" are enabled by default.

**Custom URLs:**
- Give a Google Site an easy-to-remember web address (e.g., www.example.com).
- Setup: Admin Console > Apps > GWS > Sites > Custom URL > Add New Sites.
- Then point the **CNAME record** to **ghs.googlehosted.com**.

**Why a Custom URL Might Not Work:**
- The URL already exists
- The site is private
- The domain uses strict HTTPS (HSTS)
- The CNAME record is not configured correctly`,
    qna: [
      { q: "What are Google Sites?", a: "A core Google Workspace service that allows people in an organization to quickly build beautiful and interactive websites. It follows Google Drive privacy policies." },
      { q: "Is Google Sites turned on or off by default?", a: "Turned on by default." },
      { q: "How do you turn on/off the ability to create new Sites?", a: "Admin Console > Apps > GWS > Sites > New Sites > Site creation and editing. Both 'Users can edit sites' and 'Allow users to create new sites' are enabled by default." },
      { q: "What is a Custom URL in Google Sites and how is it set up?", a: "A Custom URL gives a Google Site an easy-to-remember web address (e.g. www.example.com). Setup: Admin Console > Apps > GWS > Sites > Custom URL > Add New Sites. Then point the CNAME record to ghs.googlehosted.com." },
      { q: "What are reasons a Custom URL for Google Sites may not work?", a: "The URL already exists, the site is private, the domain uses strict HTTPS (HSTS), or the CNAME record is not configured correctly." },
    ],
  },
  {
    id: "google-forms",
    title: "Google Forms",
    icon: "📋",
    concept: `**Google Forms** is a Google Workspace tool for creating surveys, quizzes, and data collection forms.

**Admin Control:**
- Turn on/off: Admin Console > Apps > Google Workspace > Drive and Docs > Google Forms.
- Admins can control whether users can respond to **external forms** or share forms outside the organization.

**Responses Storage:**
- Stored in Google Forms; can also be linked to **Google Sheets**.

**Quiz Mode:**
- Turns a form into a graded quiz with scores, answer keys, and automatic grading.

**Email Collection Options:**
1. Do not collect
2. Verified email
3. Respondent's input`,
    qna: [
      { q: "How does an admin turn Google Forms on or off?", a: "Admin Console > Apps > Google Workspace > Drive and Docs > Google Forms." },
      { q: "Where are Google Forms responses stored?", a: "In Google Forms; responses can also be linked to Google Sheets." },
      { q: "What is Quiz Mode in Google Forms?", a: "Quiz Mode turns a form into a quiz with scores, answer keys, and automatic grading." },
      { q: "What are the options for collecting email addresses in Google Forms?", a: "Do not collect; Verified email; Respondent's input." },
      { q: "Can admins control external Google Forms access?", a: "Yes — admins can control whether users can respond to external forms or share forms outside the organization." },
    ],
  },
  {
    id: "marketplace",
    title: "Marketplace Applications",
    icon: "🛒",
    concept: `The **Google Workspace Marketplace** is a store where users can install apps that integrate with Google Workspace services.

**Admin Installation Options:**
- **Allow all apps** — users can install any app
- **Only allowlisted apps** — users can only install pre-approved apps
- **Block all apps** — no installations allowed

**Allowlist:**
- A list of admin-approved apps that users in the organization can install and use.

**Admin Powers:**
- Admins can install apps **for everyone** or **for specific OUs**.
- If an admin removes an app from the allowlist, users **lose access even if already installed**.

**Interaction with API Controls:**
- API Controls can **override** Marketplace allowlist settings — an app can be allowlisted but still blocked by API Controls.`,
    qna: [
      { q: "What is the Google Workspace Marketplace?", a: "A store where users can install apps that work with Google Workspace." },
      { q: "What app installation options can admins set in Marketplace?", a: "Allow all apps, only allowlisted apps, or block all apps." },
      { q: "What is the Allowlist in Google Workspace Marketplace?", a: "A list of approved apps that users in the organization can install and use." },
      { q: "Can an admin install Marketplace apps for the organization?", a: "Yes — admins can install apps for everyone or for specific OUs." },
      { q: "What happens if an admin removes an app from the allowlist?", a: "Users lose access to the app even if it is already installed." },
    ],
  },
];

function renderInlineMarkdown(text) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function renderTable(lines, key) {
  if (lines.length < 2) return null;

  const headers = lines[0].split("|").filter(Boolean).map((header) => header.trim());
  const rows = lines
    .slice(2)
    .map((line) => line.split("|").filter(Boolean).map((cell) => cell.trim()));

  return (
    <div className="table-wrap" key={key}>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{renderInlineMarkdown(header)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${key}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${key}-${rowIndex}-${cellIndex}`}>{renderInlineMarkdown(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ConceptRenderer({ text }) {
  const blocks = [];
  const lines = text.split("\n");
  let listItems = [];
  let listType = null;
  let tableLines = [];

  const flushList = (key) => {
    if (listItems.length === 0) return;

    const ListTag = listType === "ordered" ? "ol" : "ul";
    blocks.push(
      <ListTag key={`list-${key}`} className="concept-list">
        {listItems}
      </ListTag>,
    );
    listItems = [];
    listType = null;
  };

  const flushTable = (key) => {
    if (tableLines.length === 0) return;

    const table = renderTable(tableLines, `table-${key}`);
    if (table) blocks.push(table);
    tableLines = [];
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (line.startsWith("|")) {
      flushList(index);
      tableLines.push(line);
      return;
    }

    flushTable(index);

    if (trimmed === "") {
      flushList(index);
      blocks.push(<div className="concept-gap" key={`gap-${index}`} />);
      return;
    }

    if (trimmed === "---") {
      flushList(index);
      blocks.push(<hr key={`rule-${index}`} />);
      return;
    }

    const unorderedMatch = line.match(/^[-*]\s(.+)/);
    const orderedMatch = line.match(/^\d+\.\s(.+)/);
    if (unorderedMatch || orderedMatch) {
      const nextType = orderedMatch ? "ordered" : "unordered";
      if (listType && listType !== nextType) flushList(index);
      listType = nextType;
      listItems.push(
        <li key={`item-${index}`}>{renderInlineMarkdown((orderedMatch || unorderedMatch)[1])}</li>,
      );
      return;
    }

    flushList(index);

    if (trimmed.startsWith("**") && trimmed.endsWith("**") && !trimmed.slice(2, -2).includes("**")) {
      blocks.push(<h3 key={`heading-${index}`}>{trimmed.slice(2, -2)}</h3>);
      return;
    }

    blocks.push(<p key={`paragraph-${index}`}>{renderInlineMarkdown(line)}</p>);
  });

  flushList(lines.length);
  flushTable(lines.length);

  return <div className="concept-content">{blocks}</div>;
}

export default function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [mode, setMode] = useState("concept");
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizDraft, setQuizDraft] = useState("");
  const [quizRevealed, setQuizRevealed] = useState(false);
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });
  const [quizDone, setQuizDone] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const section = sections.find((item) => item.id === activeSection);
  const totalQuestions = useMemo(
    () => sections.reduce((total, item) => total + item.qna.length, 0),
    [],
  );
  const quizQ = section.qna[quizIndex];

  const resetStudyState = () => {
    setRevealedAnswers({});
    setQuizIndex(0);
    setQuizDraft("");
    setQuizRevealed(false);
    setQuizScore({ correct: 0, total: 0 });
    setQuizDone(false);
  };

  const switchSection = (id) => {
    setActiveSection(id);
    setMode("concept");
    resetStudyState();
    setSidebarOpen(false);
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
    resetStudyState();
  };

  const toggleAnswer = (idx) => {
    setRevealedAnswers((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleQuizAnswer = (correct) => {
    const newScore = {
      correct: quizScore.correct + (correct ? 1 : 0),
      total: quizScore.total + 1,
    };

    setQuizScore(newScore);
    setQuizDraft("");
    if (quizIndex + 1 >= section.qna.length) {
      setQuizDone(true);
    } else {
      setQuizIndex((current) => current + 1);
      setQuizRevealed(false);
    }
  };

  return (
    <div className="app-root">
      {sidebarOpen && <button className="overlay" aria-label="Close sidebar" onClick={() => setSidebarOpen(false)} />}

      <aside className={`sidebar ${sidebarOpen ? "is-open" : ""}`}>
        <div className="brand">
          <div className="brand-kicker">GWS Admin</div>
          <div className="brand-title">Study Guide</div>
          <div className="brand-meta">{totalQuestions} Questions • {sections.length} Topics</div>
        </div>

        <nav className="section-nav" aria-label="Study topics">
          {sections.map((item) => (
            <button
              className={`section-button ${activeSection === item.id ? "is-active" : ""}`}
              key={item.id}
              onClick={() => switchSection(item.id)}
              type="button"
            >
              <span className="section-icon">{item.icon}</span>
              <span>{item.title}</span>
              <span className="question-count">{item.qna.length}Q</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-shell">
        <header className="topbar">
          <button
            className="menu-toggle"
            onClick={() => setSidebarOpen((open) => !open)}
            type="button"
            aria-label="Open sidebar"
          >
            ☰
          </button>

          <div className="section-heading">
            <div className="section-title">{section.icon} {section.title}</div>
            <div className="section-subtitle">{section.qna.length} questions</div>
          </div>

          <div className="mode-tabs" role="tablist" aria-label="Study mode">
            {[
              ["concept", "📖 Concept"],
              ["all-qna", "📝 Q&A"],
              ["quiz", "Answer Practice"],
            ].map(([value, label]) => (
              <button
                className={`mode-button ${mode === value ? "is-active" : ""}`}
                key={value}
                onClick={() => switchMode(value)}
                type="button"
                role="tab"
                aria-selected={mode === value}
              >
                {label}
              </button>
            ))}
          </div>
        </header>

        <div className="content">
          {mode === "concept" && (
            <section className="panel concept-panel" aria-labelledby="concept-title">
              <div className="panel-kicker" id="concept-title">Core Concept</div>
              <ConceptRenderer text={section.concept} />
              <div className="concept-actions">
                <button className="primary-action" onClick={() => switchMode("quiz")} type="button">
                  Answer all questions
                </button>
                <button className="secondary-action" onClick={() => switchMode("all-qna")} type="button">
                  Open Q&A review
                </button>
              </div>
            </section>
          )}

          {mode === "all-qna" && (
            <section className="qna-list" aria-label={`${section.title} questions and answers`}>
              {section.qna.map((item, idx) => (
                <article className={`qna-card ${revealedAnswers[idx] ? "is-open" : ""}`} key={item.q}>
                  <button className="qna-question" onClick={() => toggleAnswer(idx)} type="button">
                    <span className="q-number">Q{idx + 1}</span>
                    <span>{item.q}</span>
                    <span className="chevron">{revealedAnswers[idx] ? "▲" : "▼"}</span>
                  </button>

                  {revealedAnswers[idx] && (
                    <div className="answer">
                      <span>ANS:</span>
                      <p>{item.a}</p>
                    </div>
                  )}
                </article>
              ))}
            </section>
          )}

          {mode === "quiz" && !quizDone && (
            <section className="quiz-shell" aria-label={`${section.title} answer practice`}>
              <div className="quiz-meta">
                <span>Question {quizIndex + 1} of {section.qna.length}</span>
                <span>{quizScore.correct} correct</span>
              </div>

              <div className="progress-track" aria-hidden="true">
                <div
                  className="progress-bar"
                  style={{ width: `${(quizIndex / section.qna.length) * 100}%` }}
                />
              </div>

              <div className="panel quiz-card">
                <div className="panel-kicker">Question</div>
                <p className="quiz-question">{quizQ.q}</p>

                {!quizRevealed ? (
                  <form
                    className="practice-form"
                    onSubmit={(event) => {
                      event.preventDefault();
                      setQuizRevealed(true);
                    }}
                  >
                    <label htmlFor={`practice-answer-${section.id}-${quizIndex}`}>Your answer</label>
                    <textarea
                      id={`practice-answer-${section.id}-${quizIndex}`}
                      value={quizDraft}
                      onChange={(event) => setQuizDraft(event.target.value)}
                      placeholder="Type your answer from memory, then check it."
                      rows={5}
                    />
                    <button className="primary-action" type="submit">
                      Check answer
                    </button>
                  </form>
                ) : (
                  <div>
                    <div className="your-answer">
                      <div>Your answer</div>
                      <p>{quizDraft.trim() || "No answer typed."}</p>
                    </div>
                    <div className="quiz-answer">
                      <div>Reference answer</div>
                      <p>{quizQ.a}</p>
                    </div>
                    <p className="practice-note">Compare your answer with the reference, then mark yourself honestly.</p>

                    <div className="quiz-actions">
                      <button className="success-action" onClick={() => handleQuizAnswer(true)} type="button">
                        Got it
                      </button>
                      <button className="danger-action" onClick={() => handleQuizAnswer(false)} type="button">
                        Missed it
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {mode === "quiz" && quizDone && (
            <section className="panel result-card" aria-label="Quiz result">
              <div className="result-mark">
                {quizScore.correct / section.qna.length >= 0.8
                  ? "🏆"
                  : quizScore.correct / section.qna.length >= 0.5
                    ? "📈"
                    : "📚"}
              </div>
              <h2>Quiz Complete</h2>
              <div className="result-score">{quizScore.correct}/{section.qna.length}</div>
              <p>
                {quizScore.correct / section.qna.length >= 0.8
                  ? "Excellent. You know this section well."
                  : quizScore.correct / section.qna.length >= 0.5
                    ? "Good progress. Review the concept again."
                    : "Review the concept section and try again."}
              </p>

              <div className="result-actions">
                <button
                  className="primary-action"
                  onClick={() => {
                    setQuizIndex(0);
                    setQuizDraft("");
                    setQuizRevealed(false);
                    setQuizScore({ correct: 0, total: 0 });
                    setQuizDone(false);
                  }}
                  type="button"
                >
                  Retry Quiz
                </button>
                <button className="secondary-action" onClick={() => setMode("concept")} type="button">
                  Review Concept
                </button>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
